const Joi = require('joi');
const { customBirthdateValidation } = require('../../../../utils/Date-Validation/User/birthdateValidation');
const { validateSchema } = require('../../validateSchema');

const updatedUserSchema = Joi.object({
    username: Joi.string().trim().min(3).max(30).optional(),
    fullname: Joi.string().trim().min(3).max(100).optional(),
    email: Joi.string().trim().email().optional(),
    birthdate: Joi.string().trim().optional().custom(customBirthdateValidation),
    img: Joi.string().trim().uri().allow('').optional(),
    password: Joi.string().trim().min(6).optional()
});

const validateUpdatedUser = validateSchema(updatedUserSchema);

module.exports = { validateUpdatedUser };