const models= require('../../database/models/index')

class MeetingRepository  {
  async create(payload) {
    return models.Meeting.create(payload)
  }
}

module.exports = new MeetingRepository()