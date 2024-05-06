const authsRouter = require('express').Router();
const { register, login } = require('../controllers/auth');

authsRouter.post('/register', register);
authsRouter.post('/login', login);

module.exports = authsRouter;