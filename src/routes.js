const express = require('express')
const router = express.Router()

// Importando controladores
const meetController = require('./controllers/meetController')

// Rotas
router.get('/meet', meetController.listMeetings)
router.post('/meet', meetController.addMeetings)
router.delete('/meet/:id', meetController.deleteMeetings)

module.exports = router