const { Attendee } = require('../models/Attendee');
const { Event } = require('../models/Event');
const { User } = require('../models/User');
const { deleteFile } = require('../../utils/File/deleteFile');
const { hashPassword } = require('../../utils/Password/hashPassword');

const getUsers = async (req, res, next) => {
    try {
        // Buscar a todos los usuarios
        const users = await User.find().populate({ path: 'organized_events', select: 'title' }).populate({ path: 'attended_events', select: 'title' });

        // Devolver una respuesta exitosa con la información de los usuarios obtenida
        const statusCode = 200;
        return res.status(statusCode).json({ statusCode, message: 'La información de los usuarios se ha obtenido de forma satisfactoria', data: users });
    } catch (err) {
        // Devolver un error HTTP 500 en caso de fallo de conexión o de petición
        const error = new Error('Ha ocurrido un error al mostrar la información de los usuarios');
        error.statusCode = 500;
        return next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Buscar a un usuario que coincida con su respectiva ID
        const user = await User.findById(id).populate({ path: 'organized_events', select: 'title' }).populate({ path: 'attended_events', select: 'title' });

        // Devolver un error HTTP 404 si el usuario no coincide con su ID o no existe
        if (!user) {
            const error = new Error('No se ha podido encontrar a este usuario');
            error.statusCode = 404;
            return next(error);
        }

        // Devolver una respuesta exitosa con la información del usuario obtenida
        const statusCode = 200;
        return res.status(statusCode).json({ statusCode, message: 'La información del usuario se ha obtenido de forma satisfactoria', data: user });
    } catch (err) {
        // Devolver un error HTTP 500 en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al mostrar la información del usuario';
        }
        return next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Buscar a un usuario que coincida con su respectiva ID
        const oldUser = await User.findById(id);

        // Devolver un error HTTP 404 si el usuario no coincide con su ID o no existe
        if (!oldUser) {
            const error = new Error('No se ha podido encontrar a este usuario');
            error.statusCode = 404;
            // Eliminar la imagen subida si existe
            if (req.file) {
                await deleteFile(req.file.path);
            }
            return next(error);
        }

        // Devolver un error HTTP 403 si el usuario registrado está intentando modificar los datos de otro usuario
        if (req.user.role === 'user' && id !== req.user._id.toString()) {
            const error = new Error('No está permitido modificar los datos de otro usuario');
            error.statusCode = 403;
            // Eliminar la imagen subida si existe
            if (req.file) {
                await deleteFile(req.file.path);
            }
            return next(error);
        }

        // Manejar la actualización de la imagen en caso de que el usuario suba un archivo en forma de imagen que represente al usuario
        if (req.file) {
            req.body.img = req.file.path;
            if (oldUser.img) {
                await deleteFile(oldUser.img);
            }
        } else if (req.body.img === '') {
            req.body.img = '';
            if (oldUser.img) {
                await deleteFile(oldUser.img);
            }
        }

        // Manejar la actualización de la contraseña del usuario en caso de que el usuario cambie su contraseña
        if (req.body.password) {
            req.body.password = hashPassword(req.body.password);
        }

        // Crear un objeto con los datos actualizados del usuario
        const updatedUserData = new User({
            username: req.body.username || oldUser.username,
            fullname: req.body.fullname || oldUser.fullname,
            email: req.body.email || oldUser.email,
            birthdate: req.body.birthdate || oldUser.birthdate,
            img: req.body.img,
            password: req.body.password || oldUser.password,
            role: oldUser.role,
            organized_events: oldUser.organized_events,
            attended_events: oldUser.attended_events
        });
        updatedUserData._id = id;

        // Actualizar el usuario en la base de datos
        const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, { new: true }).populate({ path: 'organized_events', select: 'title' }).populate({ path: 'attended_events', select: 'title' });

        // Devolver una respuesta exitosa con la información del usuario actualizada
        const statusCode = 201;
        return res.status(statusCode).json({ statusCode, message: 'La información del usuario se ha actualizado de forma satisfactoria', data: updatedUser });
    } catch (err) {
        // Devolver un error en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        // Eliminar la imagen subida si existe
        if (req.file) {
            await deleteFile(req.file.path);
        }
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al modificar los datos de este usuario';
        }
        return next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Buscar a un usuario que coincida con su respectiva ID
        const user = await User.findById(id);

        // Devolver un error HTTP 404 si el usuario no coincide con su ID o no existe
        if (!user) {
            const error = new Error('No se ha podido encontrar a este usuario');
            error.statusCode = 404;
            return next(error);
        }

        // Devolver un error HTTP 403 si el usuario intenta eliminar la información asociada al administrador
        if (user.role === 'admin') {
            const error = new Error('No está permitido eliminar la cuenta del administrador');
            error.statusCode = 403;
            return next(error);
        }

        // Devolver un error HTTP 403 si el usuario registrado está intentando modificar los datos de otro usuario
        if (user.role === 'user' && id !== req.user._id.toString()) {
            const error = new Error('No está permitido eliminar los datos de otro usuario');
            error.statusCode = 403;
            return next(error);
        }

        // Eliminar los eventos pendientes por asistir por parte del usuario
        if (user.attended_events.length) {
            const attendee = await Attendee.findOne({ username: req.user.username });
            if (attendee) {
                await Attendee.findByIdAndDelete(attendee._id);
            }
        }

        if (user.organized_events.length) {
            const organizedEvents = await Event.find({ event_organizer: id });

            // Eliminar la referencia a cada evento organizado por el usuario dentro de cada usuario y de cada asistente que iba a asistir a dichos eventos
            await Promise.all(organizedEvents.map(async organizedEvent => {
                if (organizedEvent.attendees.length) {
                    await User.updateMany({ attended_events: organizedEvent._id }, { $pull: { attended_events: organizedEvent._id } });

                    const attendees = await Attendee.find({ attended_events: organizedEvent._id });

                    await Promise.all(attendees.map(async attendee => {
                        const updatedAttendee = await Attendee.findByIdAndUpdate(attendee._id, { $pull: { attended_events: organizedEvent._id } }, { new: true });

                        if (!updatedAttendee.attended_events.length) {
                            await Attendee.findByIdAndDelete(attendee._id);
                        }
                    }));
                }

                if (organizedEvent.img) {
                    await deleteFile(organizedEvent.img);
                }
            }));

            // Eliminar los eventos organizados por el usuario
            await Event.deleteMany({ event_organizer: id });

            // Actualizar la lista de eventos organizados del usuario
            await User.findByIdAndUpdate(id, { $set: { organized_events: [] } }, { new: true });
        }

        // Eliminar la imagen del usuario si existe
        if (user.img) {
            await deleteFile(user.img);
        }

        // Eliminar al usuario de la base de datos
        const deletedUser = await User.findByIdAndDelete(id);

        // Devolver una respuesta exitosa con la información del usuario recién eliminado
        const statusCode = 200;
        return res.status(statusCode).json({ statusCode, message: 'La información del usuario se ha eliminado de forma satisfactoria', data: deletedUser });
    } catch (err) {
        // Devolver un error en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al eliminar los datos de este usuario';
        }
        return next(err);
    }
};

module.exports = { getUsers, getUserById, updateUser, deleteUser };