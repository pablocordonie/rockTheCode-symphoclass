const { User } = require('../../api/models/User');
const { verifyToken } = require('../../utils/Token/verifyToken');

const isAuth = async (req, res, next) => {
    try {
        // Obtener el token de autenticación a través de los encabezados de la solicitud
        const token = req.headers.authorization;

        if (!token) {
            // Devolver un error HTTP 404 si no se encuentra el token o no existe
            const error = new Error('No se ha podido encontrar el token de autenticación del usuario');
            error.statusCode = 404;
            return next(error);
        }

        // Eliminar el prefijo 'Bearer ' del token
        const parsedToken = token.replace('Bearer ', '');

        // Verificar el token para obtener el ID del usuario
        const id = verifyToken(parsedToken);

        // Buscar a un usuario que coincida con su respectiva ID excluyendo el campo de la contraseña
        const user = await User.findById(id).select('-password');
        if (!user) {
            // Devolver un error HTTP 401 si el usuario no coincide con el ID o no existe
            const error = new Error('No estás autorizado a realizar esta petición');
            error.statusCode = 401;
            return next(error);
        }

        // Asignar el usuario a la solicitud
        req.user = user;

        // Pasar al siguiente middleware
        next();
    } catch (err) {
        // Devolver un error en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al procesar el token de autenticación de este usuario';
        }
        return next(err);
    }
};

const isAdmin = async (req, res, next) => {
    try {
        // Obtener el token de autenticación a través de los encabezados de la solicitud
        const token = req.headers.authorization;

        if (!token) {
            // Devolver un error HTTP 404 si no se encuentra el token o no existe
            const error = new Error('No se ha podido encontrar el token de autenticación del administrador');
            error.statusCode = 404;
            return next(error);
        }

        // Eliminar el prefijo 'Bearer ' del token
        const parsedToken = token.replace('Bearer ', '');

        // Verificar el token para obtener el ID del usuario
        const id = verifyToken(parsedToken);

        // Buscar a un usuario que coincida con su respectiva ID excluyendo el campo de la contraseña
        const user = await User.findById(id).select('-password');

        if (!user) {
            // Devolver un error HTTP 401 si el usuario no coincide con el ID o no existe
            const error = new Error('No estás autorizado a realizar esta petición');
            error.statusCode = 401;
            return next(error);
        } else if (user.role !== 'admin') {
            // Devolver un error HTTP 401 si el usuario no es el administrador
            const error = new Error('No estás autorizado a realizar esta petición reservada para el administrador');
            error.statusCode = 401;
            return next(error);
        }

        // Asignar el usuario a la solicitud
        req.user = user;

        // Pasar al siguiente middleware
        next();
    } catch (err) {
        // Devolver un error en caso de fallo de conexión o de petición
        err.statusCode = err.statusCode || 500;
        if (err.statusCode === 500) {
            err.message = 'Ha ocurrido un error al procesar el token de autenticación del administrador';
        }
        return next(err);
    }
};

module.exports = { isAuth, isAdmin };