const Joi = require('joi');
const { customBirthdateValidation } = require('../../../../utils/Date-Validation/User/birthdateValidation');
const { deleteFile } = require('../../../../utils/File/deleteFile');

const loginSchema = Joi.object({
    username: Joi.string().trim().min(3).max(30).required(),
    password: Joi.string().trim().min(6).required()
});

const validateLogin = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const registerSchema = Joi.object({
    username: Joi.string().trim().min(3).max(30).required(),
    fullname: Joi.string().trim().min(3).max(100).required(),
    email: Joi.string().trim().email().required(),
    birthdate: Joi.string().trim().required().custom(customBirthdateValidation),
    img: Joi.string().trim().uri().optional(),
    password: Joi.string().trim().min(6).required()
});

const validateRegister = (req, res, next) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
        if (req.file) {
            deleteFile(req.file.path);
        }
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = { validateLogin, validateRegister };