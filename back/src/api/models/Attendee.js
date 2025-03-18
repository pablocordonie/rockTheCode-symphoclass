const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
    username: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    attended_events: [
        { type: Schema.Types.ObjectId, ref: 'events' }
    ]
}, {
    timestamps: true,
    collection: 'attendees'
});

const Attendee = mongoose.model('attendees', attendeeSchema, 'attendees');

module.exports = { Attendee };