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
        error.statusCode = 400;
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate({ path: 'organized_events', select: 'title' }).populate({ path: 'attended_events', select: 'title' });
        return res.status(200).json(user);
    } catch (err) {
        const error = new Error('Ha ocurrido un error mostrando los datos del usuario');
        error.statusCode = 400;
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, fullname, email, img, password, role } = req.body;

        if (req.user.role === 'user' && req.user.id !== id) {
            const error = new Error('No está permitido modificar los datos de otro usuario');
            error.statusCode = 400;
            return next(error);
        }

        const oldUser = await User.findById(id);

        if (!isAnyModifiedField(req.body, oldUser)) {
            const error = new Error('No se ha modificado ningún campo con la información proporcionada');
            error.statusCode = 400;
            return next(error);
        }

        const duplicatedUser = await User.findOne({ username });

        if (duplicatedUser) {
            const error = new Error('Este usuario ya está registrado');
            error.statusCode = 400;
            return next(error);
        }

        if (password) {
            password = hashPassword(password);
        }

        const newUser = new User({
            username: username || oldUser.username,
            fullname: fullname || oldUser.fullname,
            email: email || oldUser.email,
            img: img || oldUser.img,
            password: password || oldUser.password,
            role: role || oldUser.role,
            organized_events: oldUser.organized_events,
            attended_events: oldUser.attended_events
        });
        newUser._id = id;

        if (req.file) {
            newUser.img = req.file.path;
            deleteFile(oldUser.img);
        }

        const updatedUser = await User.findByIdAndUpdate(id, newUser, { new: true }).populate({ path: 'organized_events', select: 'title' });
        return res.status(201).json(updatedUser);
    } catch (err) {
        const error = new Error('Ha ocurrido un error modificando los datos del usuario');
        error.statusCode = 400;
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (req.user.role === 'user' && req.user.id !== id) {
            const error = new Error('No está permitido eliminar los datos de otro usuario');
            error.statusCode = 403;
            return next(error);
        }

        if (req.user.attended_events) {
            await Attendee.deleteMany({ fullname: req.user.fullname });
        }

        if (req.user.organized_events) {
            await Event.deleteMany({ event_organizer: id });
        }

        const deletedUser = await User.findByIdAndDelete(id);
        deleteFile(deletedUser.img);

        return res.status(200).json(deletedUser);
    } catch (err) {
        const error = new Error('Ha ocurrido un error eliminando los datos del usuario');
        error.statusCode = 400;
        next(error);
    }
};

module.exports = { getUsers, getUserById, updateUser, deleteUser };