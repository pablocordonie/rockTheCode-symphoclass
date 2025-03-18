const attendeesRouter = require('express').Router();
const { getAttendees, getAttendeeById } = require('../controllers/attendee');
const { isAdmin } = require('../../middlewares/Auth/authentication');

attendeesRouter.get('/', isAdmin, getAttendees);
attendeesRouter.get('/:id', isAdmin, getAttendeeById);

module.exports = { attendeesRouter };