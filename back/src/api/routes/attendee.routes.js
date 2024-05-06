const attendeesRouter = require('express').Router();
const { getAttendees, getAttendeeById, postAttendee, updateAttendee, deleteAttendee } = require('../controllers/attendee');
const { isAdmin } = require('../../middlewares/authentication');

attendeesRouter.get('/', isAdmin, getAttendees);
attendeesRouter.get('/:id', isAdmin, getAttendeeById);

attendeesRouter.post('/', postAttendee);

attendeesRouter.put('/update/:id', isAdmin, updateAttendee);

attendeesRouter.delete('/delete/:id', deleteAttendee);

module.exports = attendeesRouter;