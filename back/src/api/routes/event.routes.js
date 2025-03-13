const eventsRouter = require('express').Router({ mergeParams: true });
const { getEvents, getEventById } = require('../controllers/event');
const { postEvent, updateEvent, deleteEvent } = require('../controllers/event');
const { postAttendanceToAnEvent, deleteAttendanceToAnEvent } = require('../controllers/attendee');
const { isAuth } = require('../../middlewares/Auth/authentication');
const { uploadEvent } = require('../../middlewares/File/uploadFile');
const { validateEvent } = require('../../middlewares/Validators/Event/validateEvent');
const { validateUpdatedEvent } = require('../../middlewares/Validators/Event/Update/validateUpdatedEvent');

eventsRouter.get('/', isAuth, getEvents);
eventsRouter.get('/:eventId', isAuth, getEventById);

eventsRouter.post('/', isAuth, uploadEvent.single('img'), validateEvent, postEvent);
eventsRouter.post('/:eventId/attendance', isAuth, postAttendanceToAnEvent);

eventsRouter.put('/:eventId/update', isAuth, uploadEvent.single('img'), validateUpdatedEvent, updateEvent);

eventsRouter.delete('/:eventId/delete', isAuth, deleteEvent);
eventsRouter.delete('/:eventId/attendance/delete', isAuth, deleteAttendanceToAnEvent);

module.exports = eventsRouter;