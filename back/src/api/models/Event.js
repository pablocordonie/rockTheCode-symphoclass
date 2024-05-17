const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    event_organizer: { type: Schema.Types.ObjectId, required: false, ref: 'users' },
    img: { type: String, trim: true, required: false },
    date: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    attendees: [
        { type: Schema.Types.ObjectId, required: false, ref: 'attendees' }
    ]
}, {
    timestamps: true,
    collection: 'events'
});

const Event = mongoose.model('events', eventSchema, 'events');

module.exports = Event;