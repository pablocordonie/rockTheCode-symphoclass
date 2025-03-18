const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { hashPassword } = require('../../utils/Password/hashPassword');

const userSchema = new Schema({
    username: { type: String, trim: true, required: true },
    fullname: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    birthdate: { type: String, required: true },
    img: { type: String, trim: true },
    password: { type: String, trim: true, required: true },
    role: { type: String, trim: true, enum: ['admin', 'user'], default: 'user' },
    organized_events: [{ type: Schema.Types.ObjectId, ref: 'events' }],
    attended_events: [{ type: Schema.Types.ObjectId, ref: 'events' }]
}, {
    timestamps: true,
    collection: 'users'
});

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = hashPassword(this.password);
    }
    next();
});

const User = mongoose.model('users', userSchema, 'users');

module.exports = { User };