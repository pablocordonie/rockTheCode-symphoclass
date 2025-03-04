const eventsRouter = require('express').Router();
const { getEvents, getEventById } = require('../controllers/event');
const { postEvent, updateEvent, deleteEvent } = require('../controllers/event');
const { postAttendanceToAnEvent, deleteAttendanceToAnEvent } = require('../controllers/attendee');
const { isAuth } = require('../../middlewares/authentication');
const { uploadEvent } = require('../../middlewares/file');
const { validateEvent, validateUpdatedEvent } = require('../../middlewares/validators');

eventsRouter.get('/', isAuth, getEvents);
eventsRouter.get('/:id', isAuth, getEventById);

eventsRouter.post('/', isAuth, uploadEvent.single('img'), validateEvent, postEvent);
eventsRouter.post('/:eventId/attendance', isAuth, postAttendanceToAnEvent);

eventsRouter.put('/update/:eventId', isAuth, uploadEvent.single('img'), validateUpdatedEvent, updateEvent);

eventsRouter.delete('/delete/:eventId', isAuth, deleteEvent);
eventsRouter.delete('/:eventId/attendance/delete', isAuth, deleteAttendanceToAnEvent);

module.exports = eventsRouter;