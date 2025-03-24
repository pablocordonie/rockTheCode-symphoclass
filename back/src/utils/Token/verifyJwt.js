const jwt = require('jsonwebtoken');

// Generar una firma con la ID del usuario usando jwt
const generateSign = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1y' });

// Verificar que el token sea correcto usando jwt
const verifyJwt = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { generateSign, verifyJwt };