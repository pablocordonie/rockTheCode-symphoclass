const errorsManager = (err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';

    return res.status(statusCode).json({ error: { statusCode, message } });
};

module.exports = { errorsManager };