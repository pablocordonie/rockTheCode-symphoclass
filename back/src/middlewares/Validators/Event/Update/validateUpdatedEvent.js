const Joi = require('joi');
const { customEventDateTimeValidation } = require('../../../../utils/Date-Validation/Event/eventValidation');
const { validateSchema } = require('../../validateSchema');

const updatedEventSchema = Joi.object({
    title: Joi.string().trim().min(3).max(100).optional(),
    address: Joi.string().trim().min(3).max(100).optional(),
    center: Joi.string().trim().max(100).optional(),
    datetime: Joi.string().trim().optional().custom(customEventDateTimeValidation),
    img: Joi.string().trim().uri().allow('').optional()
});

const validateUpdatedEvent = validateSchema(updatedEventSchema);

module.exports = { validateUpdatedEvent };