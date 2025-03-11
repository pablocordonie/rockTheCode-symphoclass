const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    address: { type: String, required: true },
    attendees: [
        { type: Schema.Types.ObjectId, ref: 'users' }
    ],
    center: { type: String, required: true },
    confirmed: { type: Boolean },
    datetime: { type: String, required: true },
    event_organizer: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    img: { type: String, trim: true }
}, {
    timestamps: true,
    collection: 'events'
});

const Event = mongoose.model('events', eventSchema, 'events');

module.exports = Event;