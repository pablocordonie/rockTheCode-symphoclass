const eventsRouter = require('express').Router();
const { getEvents, getEventById } = require('../controllers/event');
const { isAdmin } = require('../../middlewares/authentication');

eventsRouter.get('/', isAdmin, getEvents);
eventsRouter.get('/:id', isAdmin, getEventById);

module.exports = eventsRouter;