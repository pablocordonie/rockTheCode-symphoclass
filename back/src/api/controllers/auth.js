const bcrypt = require('bcrypt');
const { User } = require('../models/User');
const { deleteFile } = require('../../utils/File/deleteFile');
const { generateSign } = require('../../utils/Token/verifyJwt');

const register = async (req, res, next) => {
    try {
        const { username, fullname, email, birthdate, password } = req.body;

        // Buscar a un usuario por su nombre de usuario y por su correo electrónico
        const duplicatedUser = await User.findOne({ username });
        const duplicatedEmail = await User.findOne({ email });

        // Devolver un error HTTP 400 si el nombre de usuario o el correo electrónico ya estaban registrados previamente
        if (duplicatedUser || duplicatedEmail) {
            const error = new Error('Este usuario ya ha sido registrado previamente');
            error.statusCode = 400;
            // Eliminar la imagen subida si existe
            if (req.file) {
                await deleteFile(req.file.path);
            }
            return next(error);
        }

        // Crear un nuevo usuario con los datos proporcionados
        const user = new User({ username, fullname, email, birthdate, img: req.file ? req.file.path : '', password });

        // Guardar el nuevo usuario en la base de datos
        const savedNewUser = await user.save();

        // Devolver una respuesta exitosa con la información del nuevo usuario creada
        const statusCode = 201;
        return res.status(statusCode).json({ statusCode, message: 'El usuario se ha registrado de forma satisfactoria', data: savedNewUser });
    } catch (err) {
        // Devolver un error HTTP 500 en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al registrarse';
        }
        return next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Buscar al usuario por nombre de usuario
        const user = await User.findOne({ email });

        // Devolver un error HTTP 404 si el usuario no existe
        if (!user) {
            const error = new Error('Este usuario no se ha registrado previamente');
            error.statusCode = 404;
            return next(error);
        }

        // Devolver un error HTTP 401 si la contraseña proporcionada es incorrecta
        if (!bcrypt.compareSync(password, user.password)) {
            const error = new Error('La contraseña proporcionada es incorrecta');
            error.statusCode = 401;
            return next(error);
        }

        // Generar un token JWT para el usuario
        const token = generateSign(user._id);

        // Devolver una respuesta exitosa con la información del usuario y el token
        const statusCode = 200;
        return res.status(statusCode).json({ statusCode, message: 'El usuario ha iniciado sesión con éxito', data: user, token });
    } catch (err) {
        // Devolver un error en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al iniciar sesión';
        }
        return next(err);
    }
};

module.exports = { register, login };