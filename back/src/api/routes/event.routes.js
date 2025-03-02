const eventsRouter = require('express').Router();
const { errorsManager } = require('../../middlewares/error');
const { getEvents, getEventById } = require('../controllers/event');
const { isAdmin, isAuth } = require('../../middlewares/authentication');

eventsRouter.get('/', isAuth, getEvents);
eventsRouter.get('/:id', isAdmin, getEventById);

eventsRouter.use(errorsManager);

module.exports = eventsRouter;