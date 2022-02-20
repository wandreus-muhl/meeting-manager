const uuid = require('uuid')
const MeetingRepository = require('../repositories/MeetRepository');

class MeetingService {
  async create(payload) {
    payload.id = uuid.v4()
    const result = await MeetingRepository.create(payload)
    return result
  }
}

module.exports = new MeetingService();