const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateSign } = require('../../config/jwt');
const { hashPassword } = require('../../utils/hash');

const register = async (req, res, next) => {
    try {
        const { username, fullname, email, img, password = hashPassword(password), role } = req.body;

        const user = new User({ username, fullname, email, img, password, role });

        const duplicatedUser = await User.findOne({ username });
        const duplicatedEmail = await User.findOne({ email });

        if (duplicatedUser || duplicatedEmail) {
            return res.status(400).json('Este usuario ya existe');
        }

        if (req.file) {
            user.img = req.file.path;
        }

        const savedNewUser = await user.save();
        return res.status(201).json(savedNewUser);
    } catch (err) {
        return res.status(400).json('Los datos proporcionados no son válidos');
    }
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json('El usuario no existe');
        }

        if (bcrypt.compareSync(password, user.password)) {
            const token = generateSign(user._id);
            return res.status(200).json({ user, token });
        } else {
            return res.status(400).json('La contraseña no es correcta');
        }
    } catch (err) {
        return res.status(400).json('Los datos proporcionados no son válidos');
    }
};

module.exports = { register, login };