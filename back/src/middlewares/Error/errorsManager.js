/* TO-DO: Revisa esta función! */
const errorsManager = (err, req, res, next) => {
    console.error(err);

    const statusCode = err.status || 500;
    const message = err.message || 'Internal server error';

    return res.status(statusCode).json({ error: message });
};

module.exports = { errorsManager };