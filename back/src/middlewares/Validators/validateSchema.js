const { handleFileDeletionError } = require('../../utils/Error/handleFileDeletionError');

const validateSchema = (schema) => async (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        if (req.file) {
            try {
                await handleFileDeletionError(req.file.path);
            } catch (err) {
                return next(err);
            }
        }
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { validateSchema };
