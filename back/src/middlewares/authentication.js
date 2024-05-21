const User = require('../api/models/User');
const { verifyJwt } = require('../config/jwt');

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const parsedToken = token.replace('Bearer ', '');

        const { id } = verifyJwt(parsedToken);

        const user = await User.findById(id);

        if (!user) {
            const error = new Error('No estás autorizado a realizar la petición');
            error.statusCode = 401;
            return next(error);
        }

        user.password = null;
        req.user = user;
        next();
    } catch (err) {
        const error = new Error('Ha ocurrido un error al procesar el token de autenticación del usuario');
        error.statusCode = 500;
        next(error);
    }
};

const isAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const parsedToken = token.replace('Bearer ', '');

        const { id } = verifyJwt(parsedToken);

        const user = await User.findById(id);

        if (!user || user.role === 'user') {
            const error = new Error('No estás autorizado a realizar la petición');
            error.statusCode = 401;
            return next(error);
        }

        user.password = null;
        req.user = user;
        next();
    } catch (err) {
        const error = new Error('Ha ocurrido un error al procesar el token de autenticación del administrador');
        error.statusCode = 500;
        next(error);
    }
};

module.exports = { isAuth, isAdmin };