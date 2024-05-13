const Attendee = require('../models/Attendee');

const getAttendees = async (req, res, next) => {
    try {
        const attendees = await Attendee.find().populate({ path: 'fullname', select: 'fullname' }).populate({ path: 'attended_events', select: 'title' });
        return res.status(200).json(attendees);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando los datos de los asistentes');
    }
};

const getAttendeeById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const attendee = await Attendee.findById(id).populate({ path: 'fullname', select: 'fullname' }).populate({ path: 'attended_events', select: 'title' });
        return res.status(200).json(attendee);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando los datos del asistente');
    }
};

module.exports = { getAttendees, getAttendeeById };