const Joi = require('joi');
const { customBirthdateValidation } = require('../../../../utils/Date-Validation/User/birthdateValidation');
const { deleteFile } = require('../../../../utils/File/deleteFile');

const updatedUserSchema = Joi.object({
    username: Joi.string().trim().min(3).max(30).optional(),
    fullname: Joi.string().trim().min(3).max(100).optional(),
    email: Joi.string().trim().email().optional(),
    birthdate: Joi.string().trim().optional().custom(customBirthdateValidation),
    img: Joi.string().trim().uri().optional(),
    password: Joi.string().trim().min(6).optional()
});

const validateUpdatedUser = (req, res, next) => {
    const { error } = updatedUserSchema.validate(req.body);
    if (error) {
        if (req.file) {
            deleteFile(req.file.path);
        }
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { validateUpdatedUser };