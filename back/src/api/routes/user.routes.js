const usersRouter = require('express').Router();
const { errorsManager } = require('../../middlewares/error');
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/user');
const { postEvent, updateEvent, deleteEvent } = require('../controllers/event');
const { postAttendanceToAnEvent, deleteAttendanceToAnEvent } = require('../controllers/attendee');
const { isAuth, isAdmin } = require('../../middlewares/authentication');
const { uploadAvatar, uploadEvent } = require('../../middlewares/file');
const { validateEvent, validateUpdatedEvent, validateUpdatedUser } = require('../../middlewares/validators');

usersRouter.get('/', isAdmin, getUsers);
usersRouter.get('/:id', isAdmin, getUserById);
usersRouter.put('/:id/update', isAuth, uploadAvatar.single('img'), validateUpdatedUser, updateUser);
usersRouter.delete('/:id/delete', isAuth, deleteUser);

usersRouter.post('/events', isAuth, uploadEvent.single('img'), validateEvent, postEvent);
usersRouter.put('/events/:id/update', isAuth, uploadEvent.single('img'), validateUpdatedEvent, updateEvent);
usersRouter.delete('/events/:id/delete', isAuth, deleteEvent);

usersRouter.post('/events/:id/attendance', isAuth, postAttendanceToAnEvent);
usersRouter.delete('/events/:id/attendance/delete', isAuth, deleteAttendanceToAnEvent);

usersRouter.use(errorsManager);

module.exports = usersRouter;