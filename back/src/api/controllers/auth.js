const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateSign } = require('../../utils/Token/verifyJwt');
const { handleFileDeletionError } = require('../../utils/Error/handleFileDeletionError');

const register = async (req, res, next) => {
    try {
        const { username, fullname, email, birthdate, password } = req.body;

        const duplicatedUser = await User.findOne({ username });
        const duplicatedEmail = await User.findOne({ email });

        if (duplicatedUser || duplicatedEmail) {
            const error = new Error(`the user's been already registered`);
            error.statusCode = 400;
            if (req.file) {
                await handleFileDeletionError(req.file.path);
            }
            return next(error);
        }

        const user = new User({ username, fullname, email, birthdate, img: req.file ? req.file.path : '', password });

        const savedNewUser = await user.save();
        return res.status(201).json(savedNewUser);
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'an error occurred while registering';
        }
        return next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            const error = new Error(`the user couldn't be found`);
            error.statusCode = 404;
            return next(error);
        }

        if (!bcrypt.compareSync(password, user.password)) {
            const error = new Error('incorrect password');
            error.statusCode = 401;
            return next(error);
        }
        const token = generateSign(user._id);
        return res.status(200).json({ user, token });
    } catch (err) {
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'an error occurred while logging in';
        }
        return next(err);
    }
};

module.exports = { register, login };