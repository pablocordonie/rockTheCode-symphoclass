const mainRouter = require('express').Router();

const attendeesRouter = require('./attendee.routes');
const authsRouter = require('./auth.routes');
const eventsRouter = require('./event.routes');
const usersRouter = require('./user.routes');

mainRouter.use('/attendees', attendeesRouter);
mainRouter.use('/auth', authsRouter);
mainRouter.use('/events', eventsRouter);
mainRouter.use('/user', usersRouter);

module.exports = mainRouter;