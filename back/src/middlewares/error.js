const errorsManager = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

    return res.status(statusCode).json({
        status: status,
        message: err.message
    });
};

module.exports = { errorsManager };