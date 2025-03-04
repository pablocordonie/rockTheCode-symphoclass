const authsRouter = require('express').Router();
const { register, login } = require('../controllers/auth');
const { uploadAvatar } = require('../../middlewares/file');
const { validateRegister, validateLogin } = require('../../middlewares/validators');

authsRouter.post('/register', uploadAvatar.single('img'), validateRegister, register);
authsRouter.post('/login', validateLogin, login);

module.exports = authsRouter;