const { verifyJwt } = require('./verifyJwt');

const verifyToken = (token) => {
    let payload;

    try {
        payload = verifyJwt(token);
    } catch (err) {
        const error = new Error(`Invalid or expired authentication token`);
        error.statusCode = 401;
        return next(error);
    }

    const { id } = payload;
    return id;
};

module.exports = { verifyToken };