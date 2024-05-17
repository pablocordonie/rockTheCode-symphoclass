const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateSign } = require('../../config/jwt');
const { hashPassword } = require('../../utils/hash');

const register = async (req, res, next) => {
    try {
        const { username, fullname, email, password, role } = req.body;

        const hashedPassword = hashPassword(password);

        const user = new User({ username, fullname, email, img: '', password: hashedPassword, role });

        const duplicatedUser = await User.findOne({ username });

        if (duplicatedUser) {
            const error = new Error('Este usuario ya está registrado');
            error.statusCode = 400;
            return next(error);
        }

        if (req.file) {
            user.img = req.file.path;
        }

        const savedNewUser = await user.save();
        return res.status(201).json(savedNewUser);
    } catch (err) {
        const error = new Error('Los datos proporcionados no son válidos');
        error.statusCode = 400;
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            const error = new Error('El usuario no existe');
            error.statusCode = 400;
            return next(error);
        }

        if (bcrypt.compareSync(password, user.password)) {
            const token = generateSign(user._id);
            return res.status(200).json({ user, token });
        } else {
            const error = new Error('La contraseña no es correcta');
            error.statusCode = 400;
            return next(error);
        }
    } catch (err) {
        const error = new Error('Los datos proporcionados no son válidos');
        error.statusCode = 400;
        next(error);
    }
};

module.exports = { register, login };