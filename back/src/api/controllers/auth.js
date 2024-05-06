const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateSign } = require('../../config/jwt');

const register = async (req, res, next) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            img: req.body.img,
            password: req.body.password,
            role: 'user'
        });

        if (req.file) {
            newUser.img = req.file.path;
        }

        const savedNewUser = await newUser.save();
        return res.status(201).json(savedNewUser);
    } catch (err) {
        return res.status(400).json('Los datos proporcionados no son válidos');
    }
};

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.body.name });

        if (!user) {
            return res.status(400).json('El usuario no existe');
        }

        if (bcrypt.compareSync(req.body.password, user.password)) {
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