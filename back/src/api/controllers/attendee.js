const { Attendee } = require('../models/Attendee');
const { Event } = require('../models/Event');
const { User } = require('../models/User');

const getAttendees = async (req, res, next) => {
    try {
        // Buscar a todos los asistentes a cualquier evento
        const attendees = await Attendee.find().populate({ path: 'username', select: 'username' }).populate({ path: 'email', select: 'email' }).populate({ path: 'attended_events', select: 'title' });

        // Devolver una respuesta exitosa con la información de los asistentes obtenida
        const statusCode = 200;
        return res.status(statusCode).json({ statusCode, message: 'La información de los asistentes se ha obtenido de forma satisfactoria', data: attendees });
    } catch (err) {
        // Devolver un error HTTP 500 en caso de fallo de conexión o de petición
        const error = new Error('Ha ocurrido un error al mostrar la lista de asistentes');
        error.statusCode = 500;
        return next(error);
    }
};

const getAttendeeById = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Buscar a un asistente que coincida con su respectiva ID
        const attendee = await Attendee.findById(id).populate({ path: 'username', select: 'username' }).populate({ path: 'email', select: 'email' }).populate({ path: 'attended_events', select: 'title' });

        // Devolver un error HTTP 404 si el asistente no coincide con su ID o no existe
        if (!attendee) {
            const error = new Error('No se ha podido encontrar a este asistente');
            error.statusCode = 404;
            return next(error);
        }

        // Devolver una respuesta exitosa con la información del asistente obtenida
        const statusCode = 200;
        return res.status(statusCode).json({ statusCode, message: 'La información del asistente se ha obtenido de forma satisfactoria', data: attendee });
    } catch (err) {
        // Devolver un error HTTP 500 en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al mostrar los datos de este asistente';
        }
        return next(err);
    }
};

const postAttendanceToAnEvent = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const eventId = req.params.eventId;

        // Devolver un error HTTP 403 si el usuario está intentando confirmar asistencia con la cuenta de otro usuario
        if (req.user.role === 'user' && userId !== req.user._id.toString()) {
            const error = new Error('No está permitido confirmar asistencia a un evento con la cuenta de otro usuario');
            error.statusCode = 403;
            return next(error);
        }

        // Devolver un error HTTP 404 si el evento no coincide con su ID o no existe
        const event = await Event.findById(eventId);
        if (!event) {
            const error = new Error('No se ha podido encontrar este evento');
            error.statusCode = 404;
            return next(error);
        }

        // Devolver un error HTTP 400 si el usuario es el anfitrión del evento
        if (req.user.organized_events.some(event => event._id.toString() === eventId)) {
            const error = new Error('El usuario no puede confirmar asistencia a este evento por ser el anfitrión de dicho evento');
            error.statusCode = 400;
            return next(error);
        }

        // Buscar a un asistente por su nombre de usuario y que a su vez sea asistente al evento asignado en los params de la url
        const eventAttendee = await Attendee.findOne({ username: req.user.username, attended_events: { _id: eventId } });

        // Devolver un error HTTP 400 si el asistente ya había confirmado asistencia a un evento concreto previamente
        if (eventAttendee) {
            const error = new Error('El usuario ya ha confirmado asistencia a este evento');
            error.statusCode = 400;
            return next(error);
        }

        // Buscar a un asistente por su nombre de usuario
        const attendee = await Attendee.findOne({ username: req.user.username });

        let responseMessage = '';
        let responseData;
        let statusCode = 200;

        // Verificar si el asistente ya existe y no había confirmado asistencia a un evento concreto previamente
        if (attendee) {
            // Actualizar la lista de eventos pendientes por asistir del asistente existente
            responseData = await Attendee.findByIdAndUpdate(attendee._id, {
                $push: { attended_events: { _id: eventId } }
            }, { new: true });

            responseMessage = 'La asistencia por parte del asistente existente ha sido confirmada de forma satisfactoria';

        } else {
            // Crear un nuevo asistente si no existe
            const newAttendee = new Attendee({
                username: req.user.username,
                email: req.user.email,
                attended_events: { _id: eventId }
            });

            // Guardar el nuevo asistente en la base de datos
            responseData = await newAttendee.save();

            responseMessage = 'La asistencia por parte del nuevo asistente ha sido confirmada de forma satisfactoria';

            statusCode = 201;
        }

        // Actualizar la lista de asistentes del evento
        await Event.findByIdAndUpdate(eventId, {
            $push: { attendees: { _id: userId } }
        });

        // Actualizar la lista de eventos pendientes por asistir del usuario
        await User.findByIdAndUpdate(userId, {
            $push: { attended_events: { _id: eventId } }
        });

        // Devolver una respuesta exitosa con la información del asistente actualizada o creada, según sea el caso
        return res.status(statusCode).json({ statusCode, message: responseMessage, data: responseData });
    } catch (err) {
        // Devolver un error en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al confirmar asistencia a este evento';
        }
        return next(err);
    }
};

const deleteAttendanceToAnEvent = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const eventId = req.params.eventId;

        // Devolver un error HTTP 403 si el usuario registrado está intentando eliminar la asistencia de otro usuario
        if (req.user.role === 'user' && userId !== req.user._id.toString()) {
            const error = new Error('No está permitido eliminar la asistencia a un evento de otro usuario');
            error.statusCode = 403;
            return next(error);
        }

        // Devolver un error HTTP 404 si el evento no coincide con su ID o no existe
        const event = await Event.findById(eventId);
        if (!event) {
            const error = new Error('No se ha podido encontrar este evento');
            error.statusCode = 404;
            return next(error);
        }

        // Buscar a un asistente por su nombre de usuario
        const attendee = await Attendee.findOne({ username: req.user.username });

        // Devolver un error HTTP 404 si el asistente no existe en la lista de asistentes a cualquier evento
        if (!attendee) {
            const error = new Error('No se ha podido encontrar a este asistente');
            error.statusCode = 404;
            return next(error);
        }

        // Buscar a un asistente por su nombre de usuario y que a su vez sea asistente al evento asignado en los params de la url
        const eventAttendee = await Attendee.findOne({ username: req.user.username, attended_events: { _id: eventId } });
        const attendeeId = eventAttendee._id.toString();

        // Devolver un error HTTP 400 si el asistente no ha confirmado asistencia a un evento concreto
        if (!eventAttendee) {
            const error = new Error('El asistente no ha confirmado asistencia a este evento previamente o bien el evento no existe');
            error.statusCode = 400;
            return next(error);
        }

        // Eliminar al asistente de la lista de asistentes del evento
        await Event.findByIdAndUpdate(eventId, { $pull: { attendees: userId } }, { new: true });

        // Eliminar el evento de la lista de eventos pendientes por asistir del usuario
        await User.findByIdAndUpdate(userId, { $pull: { attended_events: eventId } }, { new: true });

        // Eliminar el evento de la lista de eventos pendientes por asistir del propio asistente
        const updatedAttendee = await Attendee.findByIdAndUpdate(attendeeId, { $pull: { attended_events: eventId } }, { new: true });

        const statusCode = 200;
        // Verificar si el asistente tiene eventos pendientes por asistir
        if (updatedAttendee.attended_events.length) {
            // Devolver una respuesta exitosa con la información del asistente actualizada
            return res.status(statusCode).json({ statusCode, message: 'La asistencia por parte del asistente existente ha sido eliminada de forma satisfactoria', data: updatedAttendee });
        }

        // Proceder a eliminar al asistente
        const deletedAttendee = await Attendee.findByIdAndDelete(attendeeId);

        // Devolver una respuesta exitosa con la información del asistente eliminada
        return res.status(statusCode).json({ statusCode, message: 'La información del asistente ha sido eliminada', data: deletedAttendee });
    } catch (err) {
        // Devolver un error en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al eliminar los datos de este asistente';
        }
        return next(err);
    }
};

module.exports = { getAttendees, getAttendeeById, postAttendanceToAnEvent, deleteAttendanceToAnEvent };