const meetingController = require('../app/controllers/MeetController')
const createMeetingValidation = require('../app/validations/createMeeting')

module.exports = (server, routes, prefix = '/meeting') => {
  routes.post('/', createMeetingValidation, meetingController.create)
  routes.get('/', meetingController.findAll)
  routes.get('/:meetingId', meetingController.findOne)
  routes.delete('/:meetingId', meetingController.delete)
  server.use(prefix, routes)
}