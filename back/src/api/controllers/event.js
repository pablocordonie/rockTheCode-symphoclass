const Attendee = require('../models/Attendee');
const Event = require('../models/Event');
const User = require('../models/User');
const { deleteFile } = require('../../utils/deleteFile');

const getEvents = async (req, res, next) => {
    try {
        const events = await Event.find().populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        return res.status(200).json(events);
    } catch (err) {
        const error = new Error('an error occurred displaying the events');
        error.statusCode = 500;
        next(error);
    }
};

const getEventById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        if (!event) {
            const error = new Error("the event couldn't be found");
            error.statusCode = 404;
            return next(error);
        }
        return res.status(200).json(event);
    } catch (err) {
        const error = new Error("an error occurred displaying the event's data");
        error.statusCode = 500;
        next(error);
    }
};

const postEvent = async (req, res, next) => {
    try {
        const { title, date, location, description } = req.body;

        const event = await Event.findOne({ title });

        if (event) {
            const error = new Error("the event's already been registered");
            error.statusCode = 400;
            if (req.file) {
                deleteFile(req.file.path);
            }
            return next(error);
        }

        const newEvent = new Event({
            title,
            event_organizer: req.user._id,
            img: req.file ? req.file.path : '',
            date,
            location,
            description
        });

        const savedNewEvent = await newEvent.save();

        await User.findByIdAndUpdate(req.user._id, {
            $push: { organized_events: { _id: savedNewEvent._id } }
        });

        return res.status(201).json(savedNewEvent);
    } catch (err) {
        const error = new Error('an error occurred creating the event');
        error.statusCode = 500;
        if (req.file) {
            deleteFile(req.file.path);
        }
        next(error);
    }
};

const updateEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const oldEvent = await Event.findById(id);

        if (!oldEvent) {
            const error = new Error("the event couldn't be found");
            error.statusCode = 404;
            if (req.file) {
                deleteFile(req.file.path);
            }
            return next(error);
        }

        if (req.user.role === 'user' && req.user._id != oldEvent.event_organizer.toString()) {
            const error = new Error("the provided data doesn't match your user data");
            error.statusCode = 403;
            if (req.file) {
                deleteFile(req.file.path);
            }
            return next(error);
        }

        if (req.file) {
            req.body.img = req.file.path;
            if (oldEvent.img) {
                deleteFile(oldEvent.img);
            }
        } else if (req.body.img === '') {
            req.body.img = '';
            if (oldEvent.img) {
                deleteFile(oldEvent.img);
            }
        }

        const newEvent = new Event({
            title: req.body.title || oldEvent.title,
            event_organizer: req.user._id,
            img: req.body.img,
            date: req.body.date || oldEvent.date,
            location: req.body.location || oldEvent.location,
            description: req.body.description || oldEvent.description,
            attendees: oldEvent.attendees
        });
        newEvent._id = id;

        const updatedEvent = await Event.findByIdAndUpdate(id, newEvent, { new: true }).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        return res.status(201).json(updatedEvent);
    } catch (err) {
        const error = new Error("an error occurred updating the event's data");
        error.statusCode = 500;
        if (req.file) {
            deleteFile(req.file.path);
        }
        next(error);
    }
};

const deleteEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const event = await Event.findById(id);

        if (req.user.role === 'user' && req.user._id != event.event_organizer.toString()) {
            const error = new Error("it's not allowed to delete another user's event data");
            error.statusCode = 403;
            return next(error);
        }

        await Attendee.findByIdAndUpdate(event.attendees._id, { $pull: { attended_events: { _id: id } } }, { new: true });

        await User.findByIdAndUpdate(req.user._id, { $pull: { organized_events: { _id: id } } }, { new: true });

        const deletedEvent = await Event.findByIdAndDelete(id).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        deleteFile(deletedEvent.img);

        return res.status(200).json(deletedEvent);
    } catch (err) {
        const error = new Error("an error occurred deleting the event's data");
        error.statusCode = 500;
        next(error);
    }
};

module.exports = { getEvents, getEventById, postEvent, updateEvent, deleteEvent };