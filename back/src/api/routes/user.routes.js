const usersRouter = require('express').Router();
const { getUsers, getUserById, postEvent, updateEvent, updateUser, deleteEvent, deleteUser } = require('../controllers/user');
const { isAuth, isAdmin } = require('../../middlewares/authentication');

usersRouter.get('/', isAdmin, getUsers);
usersRouter.get('/:id', isAdmin, getUserById);

usersRouter.post('/events', isAuth, postEvent);

usersRouter.put('/events/update/:id', isAuth, updateEvent);
usersRouter.put('/update/:id', isAuth, updateUser);

usersRouter.delete('/events/delete/:id', isAuth, deleteEvent);
usersRouter.delete('/delete/:id', isAdmin, deleteUser);

module.exports = usersRouter;