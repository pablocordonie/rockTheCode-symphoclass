const Attendee = require('../models/Attendee');
const Event = require('../models/Event');
const User = require('../models/User');
const { hashPassword } = require('../../utils/Password/hashPassword');

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find().populate({ path: 'organized_events', select: 'title' }).populate({ path: 'attended_events', select: 'title' });
        return res.status(200).json(users);
    } catch (err) {
        const error = new Error('an error occurred while displaying the user data');
        error.statusCode = 500;
        return next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate({ path: 'organized_events', select: 'title' }).populate({ path: 'attended_events', select: 'title' });
        if (!user) {
            const error = new Error(`the user couldn't be found`);
            error.statusCode = 404;
            return next(error);
        }
        return res.status(200).json(user);
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'an error occurred while displaying the user data';
        }
        return next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const oldUser = await User.findById(id);

        if (!oldUser) {
            const error = new Error(`the user couldn't be found`);
            error.statusCode = 404;
            if (req.file) {
                await handleFileDeletionError(req.file.path);
            }
            return next(error);
        }

        if (req.user.role === 'user' && req.user._id != id) {
            const error = new Error(`it's not allowed to modify another user's data`);
            error.statusCode = 403;
            if (req.file) {
                await handleFileDeletionError(req.file.path);
            }
            return next(error);
        }

        if (req.file) {
            req.body.img = req.file.path;
            if (oldUser.img) {
                await handleFileDeletionError(oldUser.img);
            }
        } else if (req.body.img === '') {
            req.body.img = '';
            if (oldUser.img) {
                await handleFileDeletionError(oldUser.img);
            }
        }

        if (req.body.password) {
            req.body.password = hashPassword(req.body.password);
        }

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

        const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, { new: true }).populate({ path: 'organized_events', select: 'title' }).populate({ path: 'attended_events', select: 'title' });
        return res.status(201).json(updatedUser);
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (req.file) {
            await handleFileDeletionError(req.file.path);
        }
        if (err.statusCode === 500) {
            err.message = 'an error occurred while updating the user data';
        }
        return next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (req.user.role === 'admin') {
            const error = new Error(`it's not allowed to delete the admin's account`);
            error.statusCode = 403;
            return next(error);
        }

        if (req.user.role === 'user' && req.user._id != id) {
            const error = new Error(`it's not allowed to delete another user's data`);
            error.statusCode = 403;
            return next(error);
        }

        if (req.user.attended_events.length > 0) {
            const attendee = await Attendee.findOne({ username: req.user.username });
            await Attendee.findByIdAndDelete(attendee._id);
        }

        if (req.user.organized_events.length > 0) {
            await Event.deleteMany({ event_organizer: id });
        }

        const deletedUser = await User.findByIdAndDelete(id);

        if (deletedUser.img) {
            await handleFileDeletionError(deletedUser.img);
        }

        return res.status(200).json(deletedUser);
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = `an error occurred deleting the user's data`;
        }
        return next(err);
    }
};

module.exports = { getUsers, getUserById, updateUser, deleteUser };