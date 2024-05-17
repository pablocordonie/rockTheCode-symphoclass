const Attendee = require('../models/Attendee');
const Event = require('../models/Event');
const User = require('../models/User');
const { deleteFile } = require('../../utils/deleteFile');

const getEvents = async (req, res, next) => {
    try {
        const events = await Event.find().populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        return res.status(200).json(events);
    } catch (err) {
        const error = new Error('Ha ocurrido un error mostrando los eventos');
        error.statusCode = 400;
        next(error);
    }
};

const getEventById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        return res.status(200).json(event);
    } catch (err) {
        const error = new Error('Ha ocurrido un error mostrando los datos del evento');
        error.statusCode = 400;
        next(error);
    }
};

const postEvent = async (req, res, next) => {
    try {
        const { title, date, location, description } = req.body;

        const newEvent = new Event({
            title,
            event_organizer: req.user.id,
            img,
            date,
            location,
            description
        });

        if (req.file) {
            newEvent.img = req.file.path;
        }

        const savedNewEvent = await newEvent.save();

        await User.findByIdAndUpdate(id, {
            $push: { organized_events: savedNewEvent._id }
        });

        return res.status(201).json(savedNewEvent);
    } catch (err) {
        const error = new Error('Ha ocurrido un error creando los datos del evento');
        error.statusCode = 400;
        next(error);
    }
};

const postAttendanceToAnEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, email } = req.body;

        if (req.user.role === 'user' && username !== req.user.username || email !== req.user.email) {
            const error = new Error('Los datos proporcionados no coinciden con tus datos de usuario');
            error.statusCode = 400;
            return next(error);
        }

        const newAttendee = new Attendee({
            username,
            fullname: req.user.id,
            email
        });
        const savedNewAttendee = await newAttendee.save();

        await Attendee.findByIdAndUpdate(savedNewAttendee._id, {
            $push: { attended_events: id }
        });

        await Event.findByIdAndUpdate(id, {
            $push: { attendees: savedNewAttendee._id }
        });

        await User.findByIdAndUpdate(req.user.id, {
            $push: { attended_events: id }
        });

        return res.status(201).json(savedNewAttendee);
    } catch (err) {
        const error = new Error('Ha ocurrido un error creando los datos del asistente');
        error.statusCode = 400;
        next(error);
    }
};

const updateEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, date, img, location, description } = req.body;

        if (req.user.role === 'user' && req.user.id !== id) {
            const error = new Error('Los datos proporcionados no coinciden con tus datos de usuario');
            error.statusCode = 403;
            return next(error);
        }

        const oldEvent = await Event.findById(id);

        if (!isAnyModifiedField(req.body, oldEvent)) {
            const error = new Error('No se ha modificado ningún campo con la información proporcionada');
            error.statusCode = 400;
            return next(error);
        }

        const duplicatedEvent = await Event.findOne({ title });

        if (duplicatedEvent) {
            const error = new Error('Este evento ya está registrado');
            error.statusCode = 400;
            return next(error);
        }

        const newEvent = new Event({
            title: title || oldEvent.title,
            event_organizer: req.user.id,
            img: oldEvent.img,
            date: date || oldEvent.date,
            location: location || oldEvent.location,
            description: description || oldEvent.description
        });
        newEvent._id = id;

        if (req.file) {
            newEvent.img = req.file.path;
            deleteFile(oldEvent.img);
        }

        const updatedEvent = await Event.findByIdAndUpdate(id, newEvent, { new: true }).populate({ path: 'event_organizer', select: 'fullname' });
        return res.status(201).json(updatedEvent);

    } catch (err) {
        const error = new Error('Ha ocurrido un error modificando los datos del evento');
        error.statusCode = 400;
        next(error);
    }
};

const deleteEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const event = await Event.findById(id);

        if (req.user.role === 'user' && req.user.id !== event.event_organizer) {
            const error = new Error('No está permitido eliminar los datos del evento de otro usuario');
            error.statusCode = 403;
            return next(error);
        }

        await Attendee.findByIdAndUpdate(event.attendees._id, { $pull: { attended_events: { _id: id } } }, { new: true });

        await User.findByIdAndUpdate(req.user.id, { $pull: { organized_events: { _id: id } } }, { new: true });

        const deletedEvent = await Event.findByIdAndDelete(id).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'fullname' });
        deleteFile(deletedEvent.img);

        return res.status(200).json(deletedEvent);
    } catch (err) {
        const error = new Error('Ha ocurrido un error eliminando los datos del evento');
        error.statusCode = 400;
        next(error);
    }
};

const deleteAttendanceToAnEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const attendee = await Attendee.findOne({ attended_events: { _id: id } });

        await Event.findByIdAndUpdate(id, { $pull: { attendees: { _id: attendee._id } } }, { new: true });

        await User.findByIdAndUpdate(req.user.id, { $pull: { attended_events: { _id: id } } }, { new: true });

        const deletedAttendee = await Attendee.findByIdAndDelete(attendee._id);
        return res.status(200).json(deletedAttendee);
    } catch (err) {
        const error = new Error('Ha ocurrido un error eliminando los datos del asistente');
        error.statusCode = 400;
        next(error);
    }
};

module.exports = { getEvents, getEventById, postEvent, postAttendanceToAnEvent, updateEvent, deleteEvent, deleteAttendanceToAnEvent };