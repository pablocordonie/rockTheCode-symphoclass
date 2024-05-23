const Attendee = require('../models/Attendee');

const getAttendees = async (req, res, next) => {
    try {
        const attendees = await Attendee.find().populate({ path: 'fullname', select: 'fullname' }).populate({ path: 'attended_events', select: 'title' });
        return res.status(200).json(attendees);
    } catch (err) {
        const error = new Error('Ha ocurrido un error mostrando los datos de los asistentes');
        error.statusCode = 500;
        next(error);
    }
};

const getAttendeeById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const attendee = await Attendee.findById(id).populate({ path: 'fullname', select: 'fullname' }).populate({ path: 'attended_events', select: 'title' });
        if (!attendee) {
            const error = new Error('El asistente no se ha encontrado');
            error.statusCode = 404;
            return next(error);
        }
        return res.status(200).json(attendee);
    } catch (err) {
        const error = new Error('Ha ocurrido un error mostrando los datos del asistente');
        error.statusCode = 500;
        next(error);
    }
};

module.exports = { getAttendees, getAttendeeById };