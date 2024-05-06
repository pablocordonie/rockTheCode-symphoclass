const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    attended_events: { type: Schema.Types.ObjectId, required: false, ref: 'events' }
}, {
    timestamps: true,
    collection: 'attendees'
});

const Attendee = mongoose.model('attendees', attendeeSchema, 'attendees');

module.exports = Attendee;