const { Attendee } = require('../models/Attendee');
const { Event } = require('../models/Event');
const { User } = require('../models/User');
const { deleteFile } = require('../../utils/File/deleteFile');

const getEvents = async (req, res, next) => {
    try {
        // Buscar todos los eventos
        const events = await Event.find().sort({ datetime: 1 }).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });

        // Devolver una respuesta exitosa con la información de los eventos obtenida
        const statusCode = 200;
        return res.status(statusCode).json({ statusCode, message: 'La información de los eventos se ha obtenido de forma satisfactoria', data: events });
    } catch (err) {
        // Devolver un error HTTP 500 en caso de fallo de conexión o de petición
        const error = new Error('Ha ocurrido un error al mostrar la lista de eventos');
        error.statusCode = 500;
        return next(error);
    }
};

const getEventById = async (req, res, next) => {
    try {
        const { eventId } = req.params;

        // Buscar un evento que coincida con su respectiva ID
        const event = await Event.findById(eventId).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });

        // Devolver un error HTTP 404 si el evento no coincide con su ID o no existe
        if (!event) {
            const error = new Error('No se ha podido encontrar este evento');
            error.statusCode = 404;
            return next(error);
        }

        // Devolver una respuesta exitosa con la información del evento obtenida
        const statusCode = 200;
        return res.status(statusCode).json({ statusCode, message: 'La información del evento se ha obtenido de forma satisfactoria', data: event });
    } catch (err) {
        // Devolver un error HTTP 500 en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al mostrar los datos de este evento';
        }
        return next(err);
    }
};

const postEvent = async (req, res, next) => {
    try {
        const { title, address, center, datetime } = req.body;
        const userId = req.params.id;

        // Devolver un error HTTP 403 si el usuario registrado está intentando publicar un evento en la cuenta de otro usuario
        if (req.user.role === 'user' && userId !== req.user._id.toString()) {
            const error = new Error('No está permitido publicar un evento en la cuenta de otro usuario o en una cuenta inexistente');
            error.statusCode = 403;
            // Eliminar la imagen subida si existe
            if (req.file) {
                await deleteFile(req.file.path);
            }
            return next(error);
        }

        // Buscar un evento para comprobar si existe
        const event = await Event.findOne({ title });

        // Devolver un error HTTP 400 si el evento ya había sido registrado previamente
        if (event) {
            const error = new Error('Este evento ya había sido registrado previamente');
            error.statusCode = 400;
            // Eliminar la imagen subida si existe
            if (req.file) {
                await deleteFile(req.file.path);
            }
            return next(error);
        }

        // Crear un nuevo evento con los datos proporcionados
        const newEvent = new Event({
            title,
            address,
            center,
            confirmed: false,
            datetime,
            event_organizer: userId,
            img: req.file ? req.file.path : '',
        });

        // Guardar el nuevo evento en la base de datos
        const savedNewEvent = await newEvent.save();

        // Actualizar la lista de eventos organizados del usuario
        await User.findByIdAndUpdate(userId, {
            $push: { organized_events: { _id: savedNewEvent._id } }
        });

        // Devolver una respuesta exitosa con el nuevo evento creado
        const statusCode = 201;
        return res.status(statusCode).json({ statusCode, message: 'La información del nuevo evento se ha creado de forma satisfactoria', data: savedNewEvent });
    } catch (err) {
        // Devolver un error HTTP 500 en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al publicar este evento';
        }
        return next(err);
    }
};

const updateEvent = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const eventId = req.params.eventId;

        // Devolver un error HTTP 403 si el usuario registrado está intentando modificar los datos del evento organizado por otro usuario
        if (req.user.role === 'user' && userId !== req.user._id.toString()) {
            const error = new Error('No está permitido modificar los datos de este evento con la cuenta de otro usuario');
            error.statusCode = 403;
            // Eliminar la imagen subida si existe
            if (req.file) {
                await deleteFile(req.file.path);
            }
            return next(error);
        }

        // Buscar el evento que coincida con su respectiva ID
        const oldEvent = await Event.findById(eventId);

        // Devolver un error HTTP 404 si el evento no coincide con su ID o no existe
        if (!oldEvent) {
            const error = new Error('No se ha podido encontrar este evento');
            error.statusCode = 404;
            // Eliminar la imagen subida si existe
            if (req.file) {
                await deleteFile(req.file.path);
            }
            return next(error);
        }

        // Manejar la actualización de la imagen en caso de que el usuario suba un archivo en forma de imagen del evento
        if (req.file) {
            req.body.img = req.file.path;
            if (oldEvent.img) {
                await deleteFile(oldEvent.img);
            }
        } else if (req.body.img === '') {
            req.body.img = '';
            if (oldEvent.img) {
                await deleteFile(oldEvent.img);
            }
        }

        // Crear un objeto con los datos actualizados del evento
        const newEvent = new Event({
            title: req.body.title || oldEvent.title,
            address: req.body.address || oldEvent.address,
            attendees: oldEvent.attendees,
            center: req.body.center || oldEvent.center,
            confirmed: oldEvent.confirmed,
            datetime: req.body.datetime || oldEvent.datetime,
            event_organizer: userId,
            img: req.body.img,
        });
        newEvent._id = eventId;

        // Actualizar el evento en la base de datos
        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, { new: true }).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });

        // Devolver una respuesta exitosa con el evento actualizado
        const statusCode = 201;
        return res.status(statusCode).json({ statusCode, message: 'La información del evento se ha actualizado de forma satisfactoria', data: updatedEvent });
    } catch (err) {
        // Devolver un error HTTP 500 en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        // Eliminar la imagen subida si existe
        if (req.file) {
            await deleteFile(req.file.path);
        }
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al modificar los datos de este evento';
        }
        return next(err);
    }
};

const deleteEvent = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const eventId = req.params.eventId;

        // Devolver un error HTTP 403 si el usuario registrado está intentando eliminar los datos del evento organizado por otro usuario
        if (req.user.role === 'user' && userId !== req.user._id.toString()) {
            const error = new Error('No está permitido eliminar los datos del evento de otro usuario');
            error.statusCode = 403;
            return next(error);
        }

        // Buscar el evento que coincida con su respectiva ID
        const event = await Event.findById(eventId);

        // Devolver un error HTTP 404 si el evento no coincide con su ID o no existe
        if (!event) {
            const error = new Error('No se ha podido encontrar este evento');
            error.statusCode = 404;
            return next(error);
        }

        // Actualizar la lista de eventos organizados del usuario
        await User.findByIdAndUpdate(userId, { $pull: { organized_events: { _id: eventId } } }, { new: true });

        // Eliminar la imagen del evento si existe
        if (event.img) {
            await deleteFile(event.img);
        }

        // Eliminar la referencia al evento en proceso de eliminación dentro de cada usuario y de cada asistente que iba a asistir a dicho evento
        if (event.attendees.length) {
            await User.updateMany({ attended_events: eventId }, { $pull: { attended_events: eventId } });

            const attendees = await Attendee.find({ attended_events: eventId });

            await Promise.all(attendees.map(async attendee => {
                const updatedAttendee = await Attendee.findByIdAndUpdate(attendee._id, { $pull: { attended_events: eventId } }, { new: true });

                if (!updatedAttendee.attended_events.length) {
                    await Attendee.findByIdAndDelete(attendee._id);
                }
            }));
        }

        // Eliminar el evento
        const deletedEvent = await Event.findByIdAndDelete(eventId).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });

        // Devolver una respuesta exitosa con el evento eliminado
        const statusCode = 200;
        return res.status(statusCode).json({ statusCode, message: 'La información del evento se ha eliminado de forma satisfactoria', data: deletedEvent });
    } catch (err) {
        // Devolver un error HTTP 500 en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al eliminar los datos de este evento';
        }
        return next(err);
    }
};

module.exports = { getEvents, getEventById, postEvent, updateEvent, deleteEvent };