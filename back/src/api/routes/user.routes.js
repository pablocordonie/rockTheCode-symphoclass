const usersRouter = require('express').Router();
const { getUsers, getUserById, postEvent, updateEvent, updateUser, deleteUser } = require('../controllers/user');
const { isAuth, isAdmin } = require('../../middlewares/authentication');

usersRouter.get('/', isAdmin, getUsers);
usersRouter.get('/:id', isAdmin, getUserById);

usersRouter.post('/events', isAuth, postEvent);

usersRouter.put('/events/:id', isAuth, updateEvent);
usersRouter.put('/update/:id', isAuth, updateUser);

usersRouter.delete('/delete/:id', isAdmin, deleteUser);

module.exports = usersRouter;