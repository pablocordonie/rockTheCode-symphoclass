const Joi = require('joi');
const { customBirthdateValidation } = require('../utils/Date-Validation/User/birthdateValidation');
const { customEventDateValidation } = require('../utils/Date-Validation/Event/eventValidation');
const { deleteFile } = require('../utils/deleteFile');

const eventSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    address: Joi.string().min(3).max(100).required(),
    center: Joi.string().min(10).max(100).required(),
    date: Joi.string().pattern(/^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/](19\d{2}|20\d{2})$/).required().custom(customEventDateValidation),
    img: Joi.any().optional()
});

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    fullname: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    birthdate: Joi.string().pattern(/^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/](19\d{2}|20\d{2})$/).required().custom(customBirthdateValidation),
    img: Joi.any().optional(),
    password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required()
});

const updatedEventSchema = Joi.object({
    title: Joi.string().min(3).max(100).optional(),
    address: Joi.string().min(3).max(100).optional(),
    center: Joi.string().max(100).optional(),
    confirmed: Joi.any().optional(),
    date: Joi.string().pattern(/^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/](19\d{2}|20\d{2})$/).optional().custom(customEventDateValidation),
    img: Joi.any().optional()
});

const updatedUserSchema = Joi.object({
    username: Joi.string().min(3).max(30).optional(),
    fullname: Joi.string().min(3).max(100).optional(),
    email: Joi.string().email().optional(),
    birthdate: Joi.string().pattern(/^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/](19\d{2}|20\d{2})$/).optional().custom(customBirthdateValidation),
    img: Joi.any().optional(),
    password: Joi.string().min(6).optional()
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

const validateLogin = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

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

module.exports = {
    validateEvent,
    validateRegister,
    validateLogin,
    validateUpdatedEvent,
    validateUpdatedUser
};