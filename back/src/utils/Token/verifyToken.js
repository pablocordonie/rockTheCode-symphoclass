const { verifyJwt } = require('./verifyJwt');

const verifyToken = (token) => {
    let payload;

    try {
        // Verificar el token de autenticación del usuario
        payload = verifyJwt(token);
    } catch (err) {
        // Devolver un error HTTP 403 si el token de autenticación del usuario no es válido
        const error = new Error('El token de autenticación no es válido');
        error.statusCode = 403;
        throw error;
    }

    // Retornar el ID coincidente con el token de autenticación del usuario
    const { id } = payload;
    return id;
};

module.exports = { verifyToken };