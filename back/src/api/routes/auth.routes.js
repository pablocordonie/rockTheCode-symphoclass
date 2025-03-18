const authsRouter = require('express').Router();
const { register, login } = require('../controllers/auth');
const { uploadAvatar } = require('../../middlewares/File/uploadFile');
const { validateRegister, validateLogin } = require('../../middlewares/Validators/User/Auth/validateAuth');

authsRouter.post('/register', uploadAvatar.single('img'), validateRegister, register);
authsRouter.post('/login', validateLogin, login);

module.exports = { authsRouter };