const mainRouter = require('express').Router();
const { errorsManager } = require('../../middlewares/Error/errorsManager');

const attendeesRouter = require('./attendee.routes');
const authsRouter = require('./auth.routes');
const eventsRouter = require('./event.routes');
const usersRouter = require('./user.routes');

mainRouter.use('/attendees', attendeesRouter);
mainRouter.use('/auth', authsRouter);
mainRouter.use('/events', eventsRouter);
mainRouter.use('/users', usersRouter);

mainRouter.use(errorsManager);

module.exports = { mainRouter };