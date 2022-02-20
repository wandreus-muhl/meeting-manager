const meetingController = require('../app/controllers/MeetController');
const createMeetingValidation = require('../app/validations/createMeeting');

module.exports = (server, routes, prefix = '/meeting') => {
  routes.post('/', createMeetingValidation, meetingController.create);
  server.use(prefix, routes);
}