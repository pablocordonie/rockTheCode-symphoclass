const usersRouter = require('express').Router();
const { errorsManager } = require('../../middlewares/error');
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/user');
const { postEvent, postAttendanceToAnEvent, updateEvent, deleteEvent, deleteAttendanceToAnEvent } = require('../controllers/event');
const { isAuth, isAdmin } = require('../../middlewares/authentication');
const { uploadAvatar, uploadConcert } = require('../../middlewares/file');

usersRouter.get('/', isAdmin, getUsers);
usersRouter.get('/:id', isAdmin, getUserById);

usersRouter.post('/events', isAuth, uploadConcert.single('img'), postEvent);
usersRouter.post('/events/:id/attendance', isAuth, postAttendanceToAnEvent);

usersRouter.put('/events/:id/update', isAuth, uploadConcert.single('img'), updateEvent);
usersRouter.put('/:id/update', isAuth, uploadAvatar.single('img'), updateUser);

usersRouter.delete('/events/:id/delete', isAuth, deleteEvent);
usersRouter.delete('/:id/delete', isAuth, deleteUser);
usersRouter.delete('/events/:id/attendance/delete', isAuth, deleteAttendanceToAnEvent);

usersRouter.use(errorsManager);

module.exports = usersRouter;