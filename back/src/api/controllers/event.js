const Attendee = require('../models/Attendee');
const Event = require('../models/Event');
const User = require('../models/User');

const getEvents = async (req, res, next) => {
    try {
        const events = await Event.find().populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        return res.status(200).json(events);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando los eventos');
    }
};

const getEventById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'username' });
        return res.status(200).json(event);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando los datos del evento');
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

        await User.findByIdAndUpdate(id, {
            $push: { organized_events: savedNewEvent._id }
        });

        return res.status(201).json(savedNewEvent);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error creando los datos del evento');
    }
};

const postAttendanceToAnEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, email } = req.body;

        if (req.user.role === 'user' && username !== req.user.username || email !== req.user.email) {
            return res.status(400).json('Los datos proporcionados no coinciden con tus datos de usuario');
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
        return res.status(400).json('Ha ocurrido un error creando los datos del asistente');
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
        return res.status(400).json('Ha ocurrido un error modificando los datos del evento');
    }
};

const deleteEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const event = await Event.findById(id);

        if (req.user.role === 'user' && req.user.id !== event.event_organizer) {
            return res.status(403).json('No está permitido eliminar los datos del evento de otro usuario');
        }

        await User.findByIdAndUpdate(req.user.id, { $pull: { organized_events: { _id: id } } }, { new: true });

        const deletedEvent = await Event.findByIdAndDelete(id).populate({ path: 'event_organizer', select: 'fullname' }).populate({ path: 'attendees', select: 'fullname' });
        return res.status(200).json(deletedEvent);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error eliminando los datos del evento');
    }
};

const deleteAttendanceToAnEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedAttendee = await Attendee.findByIdAndDelete(id);
        return res.status(200).json(deletedAttendee);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error eliminando los datos del asistente');
    }
};

module.exports = { getEvents, getEventById, postEvent, postAttendanceToAnEvent, updateEvent, deleteEvent, deleteAttendanceToAnEvent };