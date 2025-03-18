const usersRouter = require('express').Router();
const eventsRouter = require('./event.routes');
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/user');
const { isAuth, isAdmin } = require('../../middlewares/Auth/authentication');
const { uploadAvatar } = require('../../middlewares/File/uploadFile');
const { validateUpdatedUser } = require('../../middlewares/Validators/User/Update/validateUpdatedUser');

usersRouter.get('/', isAdmin, getUsers);
usersRouter.get('/:id', isAuth, getUserById);
usersRouter.put('/:id/update', isAuth, uploadAvatar.single('img'), validateUpdatedUser, updateUser);
usersRouter.delete('/:id/delete', isAuth, deleteUser);

usersRouter.use('/:id/events', eventsRouter);

module.exports = { usersRouter };