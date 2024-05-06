const attendeesRouter = require('express').Router();
const { getAttendees } = require('../controllers/attendee');

attendeesRouter.get('/', getAttendees);

module.exports = attendeesRouter;