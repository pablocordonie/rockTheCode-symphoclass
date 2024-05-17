const attendeesRouter = require('express').Router();
const { errorsManager } = require('../../middlewares/error');
const { getAttendees, getAttendeeById } = require('../controllers/attendee');
const { isAdmin } = require('../../middlewares/authentication');

attendeesRouter.get('/', isAdmin, getAttendees);
attendeesRouter.get('/:id', isAdmin, getAttendeeById);

attendeesRouter.use(errorsManager);

module.exports = attendeesRouter;