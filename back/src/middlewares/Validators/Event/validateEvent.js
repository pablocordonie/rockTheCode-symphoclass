const Joi = require('joi');
const { customEventDateTimeValidation } = require('../../../utils/Date-Validation/Event/eventValidation');
const { deleteFile } = require('../../../utils/File/deleteFile');

const eventSchema = Joi.object({
    title: Joi.string().trim().min(3).max(100).required(),
    address: Joi.string().trim().min(3).max(100).required(),
    center: Joi.string().trim().min(10).max(100).required(),
    datetime: Joi.string().trim().required().custom(customEventDateTimeValidation),
    img: Joi.string().trim().uri().optional()
});

const validateEvent = (req, res, next) => {
    const { error } = eventSchema.validate(req.body);
    if (error) {
        if (req.file) {
            deleteFile(req.file.path);
        }
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { validateEvent };