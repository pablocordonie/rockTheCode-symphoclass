const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
    username: { type: String, required: true },
    fullname: { type: Schema.Types.ObjectId, required: false, ref: 'users' },
    email: { type: String, required: true },
    attended_events: [{ type: Schema.Types.ObjectId, required: false, ref: 'events' }]
}, {
    timestamps: true,
    collection: 'attendees'
});

const Attendee = mongoose.model('attendees', attendeeSchema, 'attendees');

module.exports = Attendee;