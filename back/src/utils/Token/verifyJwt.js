const jwt = require('jsonwebtoken');

const generateSign = (id) => jwt.sign({ id }, process.env.USER_PASSWORD, { expiresIn: '1y' });

const verifyJwt = (token) => jwt.verify(token, process.env.USER_PASSWORD);

module.exports = { generateSign, verifyJwt };