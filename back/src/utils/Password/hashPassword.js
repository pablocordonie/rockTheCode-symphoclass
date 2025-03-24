const bcrypt = require('bcrypt');

// Contraseña encriptada con bcrypt
const hashPassword = (password) => bcrypt.hashSync(password, 10);

module.exports = { hashPassword };