const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, trim: true, required: true, unique: true },
    email: { type: String, trim: true, required: true, unique: true },
    img: { type: String, trim: true, required: false },
    password: { type: String, trim: true, required: true },
    role: { type: String, trim: true, required: true, enum: ['admin', 'user'], default: 'user' },
    organized_events: [{ type: Schema.Types.ObjectId, required: false, ref: 'events' }]
}, {
    timestamps: true,
    collection: 'users'
});

userSchema.pre('save', function () {
    this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model('users', userSchema, 'users');

module.exports = User;