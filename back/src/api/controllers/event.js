const Attendee = require('../models/Attendee');
const Event = require('../models/Event');
const User = require('../models/User');
const { handleFileDeletionError } = require('../../utils/Error/handleFileDeletionError');

const getEvents = async (req, res, next) => {
    try {
        const events = await Event.find().populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        return res.status(200).json(events);
    } catch (err) {
        const error = new Error('an error occurred displaying the events');
        error.statusCode = 500;
        return next(error);
    }
};

const getEventById = async (req, res, next) => {
    try {
        const { eventId } = req.params;
        const event = await Event.findById(eventId).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        if (!event) {
            const error = new Error(`the event couldn't be found`);
            error.statusCode = 404;
            return next(error);
        }
        return res.status(200).json(event);
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = `an error occurred displaying the event's data`;
        }
        return next(err);
    }
};

const postEvent = async (req, res, next) => {
    try {
        const { title, address, center, datetime } = req.body;
        const userId = req.params.id;

        const event = await Event.findOne({ title });

        if (event) {
            const error = new Error(`the event's already been registered`);
            error.statusCode = 400;
            if (req.file) {
                await handleFileDeletionError(req.file.path);
            }
            return next(error);
        }

        const newEvent = new Event({
            title,
            address,
            center,
            confirmed: false,
            datetime,
            event_organizer: userId,
            img: req.file ? req.file.path : '',
        });

        const savedNewEvent = await newEvent.save();

        await User.findByIdAndUpdate(userId, {
            $push: { organized_events: { _id: savedNewEvent._id } }
        });

        return res.status(201).json(savedNewEvent);
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'an error occurred creating the event';
        }
        return next(err);
    }
};

const updateEvent = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const eventId = req.params.eventId;

        const oldEvent = await Event.findById(eventId);

        if (!oldEvent) {
            const error = new Error(`the event couldn't be found`);
            error.statusCode = 404;
            if (req.file) {
                await handleFileDeletionError(req.file.path);
            }
            return next(error);
        }

        if (req.user.role === 'user' && userId !== oldEvent.event_organizer._id.toString()) {
            const error = new Error(`the provided data doesn't match your user data`);
            error.statusCode = 403;
            if (req.file) {
                await handleFileDeletionError(req.file.path);
            }
            return next(error);
        }

        if (req.file) {
            req.body.img = req.file.path;
            if (oldEvent.img) {
                await handleFileDeletionError(oldEvent.img);
            }
        } else if (req.body.img === '') {
            req.body.img = '';
            if (oldEvent.img) {
                await handleFileDeletionError(oldEvent.img);
            }
        }

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

        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, { new: true }).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        return res.status(201).json(updatedEvent);
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (req.file) {
            await handleFileDeletionError(req.file.path);
        }
        if (err.statusCode === 500) {
            err.message = `an error occurred updating the event's data`;
        }
        return next(err);
    }
};

const deleteEvent = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const eventId = req.params.eventId;

        const event = await Event.findById(eventId);

        if (req.user.role === 'user' && userId !== event.event_organizer._id.toString()) {
            const error = new Error(`it's not allowed to delete another user's event data`);
            error.statusCode = 403;
            return next(error);
        }

        // Borrar de la lista de asistentes a todos los que acudan al evento en proceso de eliminación
        await Attendee.deleteMany({ attended_events: eventId });

        // Borrar dentro de cada usuario de la lista de usuarios la referencia al evento en proceso de eliminación alojada dentro de attended_events
        await User.updateMany({ attended_events: eventId }, { $pull: { attended_events: eventId } });

        await User.findByIdAndUpdate(userId, { $pull: { organized_events: { _id: eventId } } }, { new: true });

        const deletedEvent = await Event.findByIdAndDelete(eventId).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        await handleFileDeletionError(deletedEvent.img);

        return res.status(200).json(deletedEvent);
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = `an error occurred deleting the event's data`;
        }
        return next(err);
    }
};

module.exports = { getEvents, getEventById, postEvent, updateEvent, deleteEvent };