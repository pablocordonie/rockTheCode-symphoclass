const bcrypt = require('bcrypt');
const User = require('../models/User');
const Event = require('../models/Event');

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find().populate('organized_events');
        return res.status(200).json(users);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando los datos de los usuarios');
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        return res.status(200).json(user);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando los datos del usuario');
    }
};

const postEvent = async (req, res, next) => {
    try {
        const newEvent = new Event(req.body);
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
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        }

        const newUser = new User(req.body);
        newUser._id = id;
        const updatedUser = await Event.findByIdAndUpdate(id, newUser, { new: true });
        return res.status(201).json(updatedUser);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error modificando los datos del usuario');
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (req.user.role !== 'admin') {
            const deletedUser = await User.findByIdAndDelete(id);
            return res.status(200).json(deletedUser);
        } else {
            return res.status(400).json('No está permitido eliminar al administrador');
        }
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error eliminando los datos del usuario');
    }
};

module.exports = { getUsers, getUserById, postEvent, updateEvent, updateUser, deleteUser };