const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
    username: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    email: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    attended_events: [
        { type: Schema.Types.ObjectId, ref: 'events' }
    ]
}, {
    timestamps: true,
    collection: 'attendees'
});

const Attendee = mongoose.model('attendees', attendeeSchema, 'attendees');

module.exports = Attendee;