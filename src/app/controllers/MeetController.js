
const MeetingService = require('../services/MeetService')

class MeetingController  {
  async create(req, res) {
    try {
      const result = await MeetingService.create(req.body)
      return res.status(201).json(result) 
    } catch (error) {
      return res.status(500).json(error)
    }
  }
  async findAll(req, res) {
    try {
      const result = await MeetingService.findAll()
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

module.exports = new MeetingController()