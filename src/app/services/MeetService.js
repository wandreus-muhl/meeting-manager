const uuid = require('uuid')
const MeetingRepository = require('../repositories/MeetRepository')

class MeetingService {
  async create(payload) {
    payload.id = uuid.v4()
    const result = await MeetingRepository.create(payload)
    return result
  }
  async findAll() {
    const result = await MeetingRepository.findAll()
    return result
  }
  async findOne(payload) {
    const result = await MeetingRepository.findOne(payload)
    return result
  }
  async delete(payload) {
    const result = await MeetingRepository.delete(payload)
    return result
  }
}

module.exports = new MeetingService()