const Joi = require('joi');
const { customDateValidation } = require('../utils/customDateValidation');
const { deleteFile } = require('../utils/deleteFile');

const eventSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    date: Joi.string().pattern(/^\d{2}[-/]\d{2}[-/]\d{4}$/).required().custom(customDateValidation),
    img: Joi.any().optional(),
    location: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(10).max(500).required()
});

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    fullname: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    img: Joi.any().optional(),
    password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required()
});

const updatedEventSchema = Joi.object({
    title: Joi.string().min(3).max(100).optional(),
    date: Joi.string().pattern(/^\d{2}[-/]\d{2}[-/]\d{4}$/).optional().custom(customDateValidation),
    img: Joi.any().optional(),
    location: Joi.string().min(3).max(50).optional(),
    description: Joi.string().max(500).optional()
});

const updatedUserSchema = Joi.object({
    username: Joi.string().min(3).max(30).optional(),
    fullname: Joi.string().min(3).max(100).optional(),
    email: Joi.string().email().optional(),
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