const Joi = require('joi');
const { customBirthdateValidation } = require('../../../../utils/Date-Validation/User/birthdateValidation');
const { validateSchema } = require('../../validateSchema');

const updatedUserSchema = Joi.object({
    username: Joi.string().trim().min(3).max(30).allow(''),
    fullname: Joi.string().trim().min(3).max(100).allow(''),
    email: Joi.string().trim().email().allow(''),
    birthdate: Joi.string().trim().allow('').custom(customBirthdateValidation),
    img: Joi.string().trim().uri().allow(''),
    password: Joi.string().trim().min(6).allow('')
});

const validateUpdatedUser = validateSchema(updatedUserSchema);

module.exports = { validateUpdatedUser };