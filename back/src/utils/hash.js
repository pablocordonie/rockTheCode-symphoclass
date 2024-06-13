const bcrypt = require('bcrypt');

const hashedPassword = (password) => bcrypt.hashSync(password, 10);

module.exports = { hashedPassword };