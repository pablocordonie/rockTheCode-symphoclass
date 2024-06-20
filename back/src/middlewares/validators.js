const Joi = require('joi');

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

const updateSchema = Joi.object({
    username: Joi.string().min(3).max(30).optional(),
    fullname: Joi.string().min(3).max(100).optional(),
    email: Joi.string().email().optional(),
    img: Joi.any().optional(),
    password: Joi.string().min(6).optional()
});

const validateRegister = (req, res, next) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
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

const validateUpdate = (req, res, next) => {
    const { error } = updateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = {
    validateRegister,
    validateLogin,
    validateUpdate
};