const Attendee = require('../models/Attendee');
const Event = require('../models/Event');
const User = require('../models/User');
const { deleteFile } = require('../../utils/deleteFile');
const { hashPassword } = require('../../utils/hash');
const { isAnyModifiedField } = require('../../utils/isAnyModifiedField');

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find().populate({ path: 'organized_events', select: 'title' }).populate({ path: 'attended_events', select: 'title' });
        return res.status(200).json(users);
    } catch (err) {
        const error = new Error('Ha ocurrido un error mostrando los datos de los usuarios');
        error.statusCode = 500;
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate({ path: 'organized_events', select: 'title' }).populate({ path: 'attended_events', select: 'title' });
        if (!user) {
            const error = new Error('El usuario no se ha encontrado');
            error.statusCode = 404;
            return next(error);
        }
        return res.status(200).json(user);
    } catch (err) {
        const error = new Error('Ha ocurrido un error mostrando los datos del usuario');
        error.statusCode = 500;
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const oldUser = await User.findById(id);

        if (!oldUser) {
            const error = new Error('El usuario no se ha encontrado');
            error.statusCode = 404;
            if (req.file) {
                deleteFile(req.file.path);
            }
            return next(error);
        }

        if (req.user.role === 'user' && req.user.id !== id) {
            const error = new Error('No está permitido modificar los datos de otro usuario');
            error.statusCode = 403;
            if (req.file) {
                deleteFile(req.file.path);
            }
            return next(error);
        }

        if (req.file) {
            req.body.img = req.file.path;
            if (oldUser.img) {
                deleteFile(oldUser.img);
            }
        } else if (req.body.img === '') {
            req.body.img = '';
            if (oldUser.img) {
                deleteFile(oldUser.img);
            }
        }

        if (!isAnyModifiedField(req.body, oldUser)) {
            const error = new Error('No se ha modificado ningún campo con la información proporcionada');
            error.statusCode = 400;
            if (req.file) {
                deleteFile(req.file.path);
            }
            return next(error);
        }

        if (req.body.password) {
            req.body.password = hashPassword(req.body.password);
        }

        const updatedUserData = new User({
            username: req.body.username || oldUser.username,
            fullname: req.body.fullname || oldUser.fullname,
            email: req.body.email || oldUser.email,
            img: req.body.img,
            password: req.body.password || oldUser.password,
            role: oldUser.role,
            organized_events: oldUser.organized_events,
            attended_events: oldUser.attended_events
        });
        updatedUserData._id = id;

        const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, { new: true }).populate({ path: 'organized_events', select: 'title' }).populate({ path: 'attended_events', select: 'title' });
        return res.status(201).json(updatedUser);
    } catch (err) {
        const error = new Error('Ha ocurrido un error al actualizar los datos del usuario');
        error.statusCode = 500;
        if (req.file) {
            deleteFile(req.file.path);
        }
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (req.user.role === 'user' && req.user.id !== id) {
            const error = new Error('Sólo está permitido eliminar los datos asociados al usuario autenticado');
            error.statusCode = 403;
            return next(error);
        }

        if (req.user.attended_events.length > 0) {
            await Attendee.deleteMany({ fullname: req.user.fullname });
        }

        if (req.user.organized_events.length > 0) {
            await Event.deleteMany({ event_organizer: id });
        }

        const deletedUser = await User.findByIdAndDelete(id);

        if (deletedUser.img) {
            deleteFile(deletedUser.img);
        }

        return res.status(200).json(deletedUser);
    } catch (err) {
        console.log(err);
        const error = new Error('Ha ocurrido un error al eliminar los datos del usuario');
        error.statusCode = 500;
        next(error);
    }
};

module.exports = { getUsers, getUserById, updateUser, deleteUser };