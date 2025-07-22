const Joi = require('joi');
const { customBirthdateValidation } = require('../../../../utils/Date-Validation/User/birthdateValidation');
const { validateSchema } = require('../../validateSchema');

const loginSchema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(6).required()
});

const validateLogin = validateSchema(loginSchema);

const registerSchema = Joi.object({
    username: Joi.string().trim().min(3).max(30).required(),
    fullname: Joi.string().trim().min(3).max(100).required(),
    email: Joi.string().trim().email().required(),
    birthdate: Joi.string().trim().required().custom(customBirthdateValidation),
    img: Joi.string().trim().uri().optional(),
    password: Joi.string().trim().min(6).required()
});

const validateRegister = validateSchema(registerSchema);

module.exports = { validateLogin, validateRegister };