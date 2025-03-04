const usersRouter = require('express').Router();
const eventsRouter = require('./event.routes');
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/user');
const { isAuth, isAdmin } = require('../../middlewares/authentication');
const { uploadAvatar } = require('../../middlewares/file');
const { validateUpdatedUser } = require('../../middlewares/validators');

usersRouter.get('/', isAdmin, getUsers);
usersRouter.get('/:id', isAdmin, getUserById);
usersRouter.put('/:id/update', isAuth, uploadAvatar.single('img'), validateUpdatedUser, updateUser);
usersRouter.delete('/:id/delete', isAuth, deleteUser);

usersRouter.use('/:id/events', eventsRouter);

module.exports = usersRouter;