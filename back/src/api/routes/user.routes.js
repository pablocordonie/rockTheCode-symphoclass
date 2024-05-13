const usersRouter = require('express').Router();
const { getUsers, getUserById, updateUser, deleteUser } = require('../controllers/user');
const { postEvent, postAttendanceToAnEvent, updateEvent, deleteEvent, deleteAttendanceToAnEvent } = require('../controllers/event');
const { isAuth, isAdmin } = require('../../middlewares/authentication');

usersRouter.get('/', isAdmin, getUsers);
usersRouter.get('/:id', isAdmin, getUserById);

usersRouter.post('/events', isAuth, postEvent);
usersRouter.post('/events/:id/attendance', isAuth, postAttendanceToAnEvent);

usersRouter.put('/events/:id/update', isAuth, updateEvent);
usersRouter.put('/:id/update', isAuth, updateUser);

usersRouter.delete('/events/:id/delete', isAuth, deleteEvent);
usersRouter.delete('/:id/delete', isAuth, deleteUser);
usersRouter.delete('/events/:id/attendance/delete', isAuth, deleteAttendanceToAnEvent);

module.exports = usersRouter;