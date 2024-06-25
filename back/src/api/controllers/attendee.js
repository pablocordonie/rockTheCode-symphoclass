const Attendee = require('../models/Attendee');
const Event = require('../models/Event');
const User = require('../models/User');

const getAttendees = async (req, res, next) => {
    try {
        const attendees = await Attendee.find().populate({ path: 'username', select: 'username' }).populate({ path: 'email', select: 'email' }).populate({ path: 'attended_events', select: 'title' });
        return res.status(200).json(attendees);
    } catch (err) {
        const error = new Error('an error occurred displaying the attendees');
        error.statusCode = 500;
        next(error);
    }
};

const getAttendeeById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const attendee = await Attendee.findById(id).populate({ path: 'username', select: 'username' }).populate({ path: 'email', select: 'email' }).populate({ path: 'attended_events', select: 'title' });
        if (!attendee) {
            const error = new Error("the attendee couldn't be found");
            error.statusCode = 404;
            return next(error);
        }
        return res.status(200).json(attendee);
    } catch (err) {
        const error = new Error("an error occurred displaying the attendee's data");
        error.statusCode = 500;
        next(error);
    }
};

const postAttendanceToAnEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (req.user.organized_events.some(event => event._id.toString() === id)) {
            const error = new Error("the user can't confirm attendance because of being the event host");
            error.statusCode = 400;
            return next(error);
        }

        const attendee = await Attendee.findOne({ username: req.user.username });

        if (attendee) {
            const error = new Error('the user has already confirmed attendance to the event');
            error.statusCode = 400;
            return next(error);
        }

        const newAttendee = new Attendee({
            username: req.user.username,
            email: req.user.email
        });
        const savedNewAttendee = await newAttendee.save();

        await Attendee.findByIdAndUpdate(savedNewAttendee._id, {
            $push: { attended_events: { _id: id } }
        });

        await Event.findByIdAndUpdate(id, {
            $push: { attendees: { _id: req.user._id } }
        });

        await User.findByIdAndUpdate(req.user._id, {
            $push: { attended_events: { _id: id } }
        });

        return res.status(201).json(savedNewAttendee);
    } catch (err) {
        const error = new Error('an error occurred confirming attendance to the event');
        error.statusCode = 500;
        next(error);
    }
};

const deleteAttendanceToAnEvent = async (req, res, next) => {
    try {
        const { id } = req.params;

        const attendee = await Attendee.findOne({ username: req.user.username });

        if (!attendee) {
            const error = new Error("the attendee couldn't be found");
            error.statusCode = 404;
            return next(error);
        }

        await Event.findByIdAndUpdate(id, { $pull: { attendees: req.user._id } });

        await User.findByIdAndUpdate(req.user._id, { $pull: { attended_events: id } });

        const deletedAttendee = await Attendee.findByIdAndDelete(attendee._id);
        return res.status(200).json(deletedAttendee);
    } catch (err) {
        const error = new Error("an error occurred deleting the attendee's data");
        error.statusCode = 500;
        next(error);
    }
};

module.exports = { getAttendees, getAttendeeById, postAttendanceToAnEvent, deleteAttendanceToAnEvent };