const bcrypt = require('bcrypt');
const User = require('../models/User');
const { deleteFile } = require('../../utils/deleteFile');
const { generateSign } = require('../../config/jwt');

const register = async (req, res, next) => {
    try {
        const { username, fullname, email, password } = req.body;

        const user = new User({ username, fullname, email, img: req.file ? req.file.path : '', password });

        const duplicatedUser = await User.findOne({ username });
        const duplicatedEmail = await User.findOne({ email });

        if (duplicatedUser || duplicatedEmail) {
            const error = new Error("the user's been already registered");
            error.statusCode = 400;
            if (req.file) {
                deleteFile(req.file.path);
            }
            return next(error);
        }

        const savedNewUser = await user.save();
        return res.status(201).json(savedNewUser);
    } catch (err) {
        const error = new Error('an error occurred while registering');
        error.statusCode = 500;
        if (req.file) {
            deleteFile(req.file.path);
        }
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            const error = new Error("the user couldn't be found");
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
        const error = new Error('an error occurred while logging in');
        error.statusCode = 500;
        next(error);
    }
};

module.exports = { register, login };