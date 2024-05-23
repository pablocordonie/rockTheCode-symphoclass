const Attendee = require('../models/Attendee');
const Event = require('../models/Event');
const User = require('../models/User');
const { deleteFile } = require('../../utils/deleteFile');
const { isAnyModifiedField } = require('../../utils/isAnyModifiedField');

const getEvents = async (req, res, next) => {
    try {
        const events = await Event.find().populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        return res.status(200).json(events);
    } catch (err) {
        const error = new Error('Ha ocurrido un error mostrando los eventos');
        error.statusCode = 500;
        next(error);
    }
};

const getEventById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        if (!event) {
            const error = new Error('El evento no se ha encontrado');
            error.statusCode = 404;
            return next(error);
        }
        return res.status(200).json(event);
    } catch (err) {
        const error = new Error('Ha ocurrido un error mostrando los datos del evento');
        error.statusCode = 500;
        next(error);
    }
};

const postEvent = async (req, res, next) => {
    try {
        const { title, date, location, description } = req.body;

        const event = await Event.findOne({ title });

        if (event) {
            const error = new Error('El evento ya está registrado');
            error.statusCode = 400;
            if (req.file) {
                deleteFile(req.file.path);
            }
            return next(error);
        }

        const newEvent = new Event({
            title,
            event_organizer: req.user.id,
            img: '',
            date,
            location,
            description
        });

        if (req.file) {
            newEvent.img = req.file.path;
        }

        const savedNewEvent = await newEvent.save();

        await User.findByIdAndUpdate(req.user.id, {
            $push: { organized_events: { _id: savedNewEvent._id } }
        });

        return res.status(201).json(savedNewEvent);
    } catch (err) {
        const error = new Error('Ha ocurrido un error al crear el evento');
        error.statusCode = 500;
        if (req.file) {
            deleteFile(req.file.path);
        }
        next(error);
    }
};

const postAttendanceToAnEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, email } = req.body;

        if (req.user.organized_events.some(event => event._id.toString() === id)) {
            const error = new Error('El usuario no puede confirmar asistencia por ser el anfitrión del evento');
            error.statusCode = 400;
            return next(error);
        }

        if (req.user.role === 'user' && username !== req.user.username || email !== req.user.email) {
            const error = new Error('Los datos proporcionados no coinciden con tus datos de usuario');
            error.statusCode = 400;
            return next(error);
        }

        const attendee = await Attendee.findOne({ username });

        if (attendee) {
            const error = new Error('El usuario ya ha confirmado su asistencia al evento');
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
            $push: { attended_events: { _id: id } }
        });

        await Event.findByIdAndUpdate(id, {
            $push: { attendees: { _id: savedNewAttendee._id } }
        });

        await User.findByIdAndUpdate(req.user.id, {
            $push: { attended_events: { _id: id } }
        });

        return res.status(201).json(savedNewAttendee);
    } catch (err) {
        const error = new Error('Ha ocurrido un error al confirmar asistencia al evento');
        error.statusCode = 500;
        next(error);
    }
};

const updateEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const oldEvent = await Event.findById(id);

        if (!oldEvent) {
            const error = new Error('El evento no se ha encontrado');
            error.statusCode = 404;
            if (req.file) {
                deleteFile(req.file.path);
            }
            return next(error);
        }

        if (req.user.role === 'user' && req.user.id !== oldEvent.event_organizer.toString()) {
            const error = new Error('Los datos proporcionados no coinciden con tus datos de usuario');
            error.statusCode = 403;
            if (req.file) {
                deleteFile(req.file.path);
            }
            return next(error);
        }

        if (!isAnyModifiedField(req.body, oldEvent)) {
            const error = new Error('No se ha modificado ningún campo con la información proporcionada');
            error.statusCode = 400;
            if (req.file) {
                deleteFile(req.body.img);
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
            event_organizer: req.user.id,
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
        const error = new Error('Ha ocurrido un error al actualizar los datos del evento');
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

        if (req.user.role === 'user' && req.user.id !== event.event_organizer.toString()) {
            const error = new Error('No está permitido eliminar los datos del evento de otro usuario');
            error.statusCode = 403;
            return next(error);
        }

        await Attendee.findByIdAndUpdate(event.attendees._id, { $pull: { attended_events: { _id: id } } }, { new: true });

        await User.findByIdAndUpdate(req.user.id, { $pull: { organized_events: { _id: id } } }, { new: true });

        const deletedEvent = await Event.findByIdAndDelete(id).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        deleteFile(deletedEvent.img);

        return res.status(200).json(deletedEvent);
    } catch (err) {
        const error = new Error('Ha ocurrido un error al eliminar los datos del evento');
        error.statusCode = 500;
        next(error);
    }
};

const deleteAttendanceToAnEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const attendee = await Attendee.findOne({ attended_events: { _id: id } });

        if (!attendee) {
            const error = new Error('El asistente no se ha encontrado');
            error.statusCode = 404;
            return next(error);
        }

        await Event.findByIdAndUpdate(id, { $pull: { attendees: { _id: attendee._id } } }, { new: true });

        await User.findByIdAndUpdate(req.user.id, { $pull: { attended_events: { _id: id } } }, { new: true });

        const deletedAttendee = await Attendee.findByIdAndDelete(attendee._id);
        return res.status(200).json(deletedAttendee);
    } catch (err) {
        const error = new Error('Ha ocurrido un error al eliminar los datos del asistente');
        error.statusCode = 500;
        next(error);
    }
};

module.exports = { getEvents, getEventById, postEvent, postAttendanceToAnEvent, updateEvent, deleteEvent, deleteAttendanceToAnEvent };