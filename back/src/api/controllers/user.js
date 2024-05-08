const User = require('../models/User');
const Event = require('../models/Event');
const { hashPassword } = require('../../utils/hash');

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

        const newEvent = new Event({
            title,
            event_organizer: req.user.id,
            date,
            location,
            description
        });

        const savedNewEvent = await newEvent.save();
        return res.status(201).json(savedNewEvent);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error creando este evento');
    }
};

const updateEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newEvent = new Event(req.body);
        newEvent._id = id;
        const updatedEvent = await Event.findByIdAndUpdate(id, newEvent, { new: true });
        return res.status(201).json(updatedEvent);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error modificando este evento');
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (req.body.password) {
            req.body.password = hashPassword(req.body.password);
        }
        const newUser = new User(req.body);
        newUser._id = id;
        if (req.user.role === 'admin') {
            newUser.role = req.user.role;
        }
        const updatedUser = await User.findByIdAndUpdate(id, newUser, { new: true }).populate({ path: 'organized_events', select: 'title' });
        return res.status(201).json(updatedUser);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error modificando los datos del usuario');
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (req.user.role !== 'admin') {
            const deletedUser = await User.findByIdAndDelete(id).populate({ path: 'organized_events', select: 'title' });
            return res.status(200).json(deletedUser);
        } else {
            return res.status(400).json('No está permitido eliminar al administrador');
        }
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error eliminando los datos del usuario');
    }
};

module.exports = { getUsers, getUserById, postEvent, updateEvent, updateUser, deleteUser };