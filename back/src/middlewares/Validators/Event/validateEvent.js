const Joi = require('joi');
const { customEventDateTimeValidation } = require('../../../utils/Date-Validation/Event/eventValidation');
const { validateSchema } = require('../validateSchema');

const eventSchema = Joi.object({
    title: Joi.string().trim().min(3).max(100).required(),
    address: Joi.string().trim().min(3).max(100).required(),
    center: Joi.string().trim().min(10).max(100).required(),
    datetime: Joi.string().trim().required().custom(customEventDateTimeValidation),
    img: Joi.string().trim().uri().optional()
});

const validateEvent = validateSchema(eventSchema);

module.exports = { validateEvent };