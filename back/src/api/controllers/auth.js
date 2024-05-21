const bcrypt = require('bcrypt');
const User = require('../models/User');
const { deleteFile } = require('../../utils/deleteFile');
const { generateSign } = require('../../config/jwt');

const register = async (req, res, next) => {
    try {
        const { username, fullname, email, password } = req.body;

        const user = new User({ username, fullname, email, img: '', password });

        const duplicatedUser = await User.findOne({ username });
        const duplicatedEmail = await User.findOne({ email });

        if (duplicatedUser || duplicatedEmail) {
            const error = new Error('El usuario ya está registrado');
            error.statusCode = 400;
            if (req.file) {
                deleteFile(req.file.path);
            }
            return next(error);
        }

        if (req.file) {
            user.img = req.file.path;
        }

        const savedNewUser = await user.save();
        return res.status(201).json(savedNewUser);
    } catch (err) {
        const error = new Error('Ha ocurrido un error al registrarse');
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

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateSign(user._id);
            return res.status(200).json({ user, token });
        } else {
            const error = new Error('Las credenciales no son correctas');
            error.statusCode = 400;
            return next(error);
        }
    } catch (err) {
        const error = new Error('Ha ocurrido un error al iniciar sesión');
        error.statusCode = 500;
        next(error);
    }
};

module.exports = { register, login };