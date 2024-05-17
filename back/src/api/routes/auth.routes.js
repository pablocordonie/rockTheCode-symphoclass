const authsRouter = require('express').Router();
const { errorsManager } = require('../../middlewares/error');
const { register, login } = require('../controllers/auth');
const { uploadAvatar } = require('../../middlewares/file');

authsRouter.post('/register', uploadAvatar.single('img'), register);
authsRouter.post('/login', login);

authsRouter.use(errorsManager);

module.exports = authsRouter;