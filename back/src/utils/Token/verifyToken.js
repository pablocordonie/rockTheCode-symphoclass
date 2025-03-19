const { verifyJwt } = require('./verifyJwt');

const verifyToken = (token) => {
    let payload;

    try {
        payload = verifyJwt(token);
    } catch (err) {
        const error = new Error(`Invalid or expired authentication token`);
        error.statusCode = 403;
        throw error;
    }

    const { id } = payload;
    return id;
};

module.exports = { verifyToken };