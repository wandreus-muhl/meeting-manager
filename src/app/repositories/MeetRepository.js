const models= require('../../database/models/index')

class MeetingRepository  {
  async create(payload) {
    return models.Meeting.create(payload)
  }
  async findAll() {
    return models.Meeting.findAll()
  }
  async findOne(payload) {
    return models.Meeting.findByPk(payload.meetingId)
  }
}

module.exports = new MeetingRepository()