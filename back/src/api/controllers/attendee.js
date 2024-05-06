const Attendee = require('../models/Attendee');

const getAttendees = async (req, res, next) => {
    try {
        const attendees = await Attendee.find();
        return res.status(200).json(attendees);
    } catch (err) {
        return res.status(400).json('Ha ocurrido un error mostrando los usuarios');
    }
};

module.exports = { getAttendees };