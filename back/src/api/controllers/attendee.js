const Attendee = require('../models/Attendee');

const getAttendees = async (req, res, next) => {
    try {
        const attendees = await Attendee.find().populate('attended_events');
        return res.status(200).json(attendees);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando a los asistentes');
    }
};

const getAttendeeById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const attendee = await Attendee.findById(id);
        return res.status(200).json(attendee);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando a este asistente');
    }
};

const postAttendee = async (req, res, next) => {
    try {
        const newAttendee = new Attendee(req.body);
        const savedNewAttendee = await newAttendee.save();
        return res.status(201).json(savedNewAttendee);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error creando a este asistente');
    }
};

const updateAttendee = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newAttendee = new Attendee(req.body);
        newAttendee._id = id;
        const updatedAttendee = await Attendee.findByIdAndUpdate(id, newAttendee, { new: true });
        return res.status(201).json(updatedAttendee);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error modificando los datos de este asistente');
    }
};

const deleteAttendee = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedAttendee = await Attendee.findByIdAndDelete(id);
        return res.status(200).json(deletedAttendee);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error eliminando los datos de este asistente');
    }
};

module.exports = { getAttendees, getAttendeeById, postAttendee, updateAttendee, deleteAttendee };