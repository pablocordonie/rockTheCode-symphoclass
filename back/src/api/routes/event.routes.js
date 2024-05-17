const eventsRouter = require('express').Router();
const { errorsManager } = require('../../middlewares/error');
const { getEvents, getEventById } = require('../controllers/event');
const { isAdmin } = require('../../middlewares/authentication');

eventsRouter.get('/', isAdmin, getEvents);
eventsRouter.get('/:id', isAdmin, getEventById);

eventsRouter.use(errorsManager);

module.exports = eventsRouter;