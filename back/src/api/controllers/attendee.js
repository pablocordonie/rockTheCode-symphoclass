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
        return next(error);
    }
};

const getAttendeeById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const attendee = await Attendee.findById(id).populate({ path: 'username', select: 'username' }).populate({ path: 'email', select: 'email' }).populate({ path: 'attended_events', select: 'title' });
        if (!attendee) {
            const error = new Error(`the attendee couldn't be found`);
            error.statusCode = 404;
            return next(error);
        }
        return res.status(200).json(attendee);
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = `an error occurred displaying the attendee's data`;
        }
        return next(err);
    }
};

const postAttendanceToAnEvent = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const eventId = req.params.eventId;

        if (req.user.organized_events.some(event => event._id.toString() === eventId)) {
            const error = new Error(`the user can't confirm attendance because of being the event host`);
            error.statusCode = 400;
            return next(error);
        }

        if (req.user.role === 'user' && userId !== req.user._id.toString()) {
            const error = new Error(`It's not allowed to post attendance at another user's event.`);
            error.statusCode = 403;
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
            $push: { attended_events: { _id: eventId } }
        });

        await Event.findByIdAndUpdate(eventId, {
            $push: { attendees: { _id: userId } }
        });

        await User.findByIdAndUpdate(userId, {
            $push: { attended_events: { _id: eventId } }
        });

        return res.status(201).json(savedNewAttendee);
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'an error occurred confirming attendance to the event';
        }
        return next(err);
    }
};

const deleteAttendanceToAnEvent = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const eventId = req.params.eventId;

        const attendee = await Attendee.findOne({ username: req.user.username });

        if (!attendee) {
            const error = new Error(`the attendee couldn't be found`);
            error.statusCode = 404;
            return next(error);
        }

        if (req.user.role === 'user' && userId !== req.user._id.toString()) {
            const error = new Error(`it's not allowed to delete another user's event attendance`);
            error.statusCode = 403;
            return next(error);
        }

        await Event.findByIdAndUpdate(eventId, { $pull: { attendees: userId } });

        await User.findByIdAndUpdate(userId, { $pull: { attended_events: eventId } });

        const deletedAttendee = await Attendee.findByIdAndDelete(attendee._id);
        return res.status(200).json(deletedAttendee);
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = `an error occurred deleting the attendee's data`;
        }
        return next(err);
    }
};

module.exports = { getAttendees, getAttendeeById, postAttendanceToAnEvent, deleteAttendanceToAnEvent };