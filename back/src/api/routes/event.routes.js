const eventsRouter = require('express').Router();
const { getEvents, getEventById, deleteEvent } = require('../controllers/event');
const { isAdmin } = require('../../middlewares/authentication');

eventsRouter.get('/', isAdmin, getEvents);
eventsRouter.get('/:id', isAdmin, getEventById);

eventsRouter.delete('/:id', isAdmin, deleteEvent);

module.exports = eventsRouter;