const Event = require('../models/Event');

const getEvents = async (req, res, next) => {
    try {
        const events = await Event.find().populate('event_organizer');
        return res.status(200).json(events);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando los eventos');
    }
};

const getEventById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);
        return res.status(200).json(event);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando este evento');
    }
};

const deleteEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedEvent = await Event.findByIdAndDelete(id);
        return res.status(200).json(deletedEvent);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error eliminando este evento');
    }
};

module.exports = { getEvents, getEventById, deleteEvent };