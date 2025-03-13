const Joi = require('joi');
const { customEventDateTimeValidation } = require('../../../../utils/Date-Validation/Event/eventValidation');
const { deleteFile } = require('../../../../utils/File/deleteFile');

const updatedEventSchema = Joi.object({
    title: Joi.string().trim().min(3).max(100).optional(),
    address: Joi.string().trim().min(3).max(100).optional(),
    center: Joi.string().trim().max(100).optional(),
    datetime: Joi.string().trim().optional().custom(customEventDateTimeValidation),
    img: Joi.string().trim().uri().optional()
});

const validateUpdatedEvent = (req, res, next) => {
    const { error } = updatedEventSchema.validate(req.body);
    if (error) {
        if (req.file) {
            deleteFile(req.file.path);
        }
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { validateUpdatedEvent };