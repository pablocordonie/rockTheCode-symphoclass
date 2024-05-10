const User = require('../models/User');
const Event = require('../models/Event');
const { hashPassword } = require('../../utils/hash');
const { isAnyModifiedField } = require('../../utils/isAnyModifiedField');

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find().populate({ path: 'organized_events', select: 'title' });
        return res.status(200).json(users);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando los datos de los usuarios');
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate({ path: 'organized_events', select: 'title' });
        return res.status(200).json(user);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando los datos del usuario');
    }
};

const postEvent = async (req, res, next) => {
    try {
        const { title, date, location, description } = req.body;

        const { id } = req.user;

        const newEvent = new Event({
            title,
            event_organizer: id,
            date,
            location,
            description
        });

        const savedNewEvent = await newEvent.save();

        await User.findByIdAndUpdate(id, {
            $push: { organized_events: savedNewEvent._id }
        }, { new: true });

        return res.status(201).json(savedNewEvent);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error creando este evento');
    }
};

const updateEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, date, location, description } = req.body;

        if (req.user.role === 'user' && req.user.id !== id) {
            return res.status(403).json('No está permitido modificar los datos de otro evento que no sea el que has publicado');
        }

        const oldEvent = await Event.findById(id);

        if (!isAnyModifiedField(req.body, oldEvent)) {
            return res.status(400).json('No se ha modificado ningún campo con la información proporcionada');
        }

        const duplicatedEvent = await Event.findOne({ title });

        if (duplicatedEvent) {
            return res.status(400).json('Este evento ya está registrado');
        }

        const newEvent = new Event({
            title: title || oldEvent.title,
            event_organizer: req.user.id,
            date: date || oldEvent.date,
            location: location || oldEvent.location,
            description: description || oldEvent.description
        });
        newEvent._id = id;

        const updatedEvent = await Event.findByIdAndUpdate(id, newEvent, { new: true }).populate({ path: 'event_organizer', select: 'fullname' });
        return res.status(201).json(updatedEvent);

    } catch (err) {
        return res.status(400).json('Ha ocurrido un error modificando este evento');
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, fullname, email, img, password, role } = req.body;

        if (req.user.role === 'user' && req.user.id !== id) {
            return res.status(403).json('No está permitido modificar los datos de otro usuario');
        }

        const oldUser = await User.findById(id);

        if (!isAnyModifiedField(req.body, oldUser)) {
            return res.status(400).json('No se ha modificado ningún campo con la información proporcionada');
        }

        const duplicatedUser = await User.findOne({ username });

        if (duplicatedUser) {
            return res.status(400).json('Este usuario ya está registrado');
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
            organized_events: oldUser.organized_events
        });
        newUser._id = id;

        if (req.file) {
            newUser.img = req.file.path;
        }

        const updatedUser = await User.findByIdAndUpdate(id, newUser, { new: true }).populate({ path: 'organized_events', select: 'title' });
        return res.status(201).json(updatedUser);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error modificando los datos del usuario');
    }
};

const deleteEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (req.user.role === 'user' && req.user.id !== req.user.organized_events._id) {
            return res.status(403).json('No está permitido modificar los datos del evento de otro usuario');
        }

        await User.findOneAndUpdate(req.user.id, { $pull: { organized_events: { _id: id } } }, { new: true });

        const deletedEvent = await Event.findByIdAndDelete(id).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'name' });
        return res.status(200).json(deletedEvent);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error eliminando este evento');
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        await Event.deleteMany({ event_organizer: id });
        const deletedUser = await User.findByIdAndDelete(id);
        return res.status(200).json(deletedUser);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error eliminando los datos del usuario');
    }
};

module.exports = { getUsers, getUserById, postEvent, updateEvent, updateUser, deleteEvent, deleteUser };