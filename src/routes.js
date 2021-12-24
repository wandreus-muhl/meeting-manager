const express = require('express')
const router = express.Router()

// Importando controladores
const meetController = require('./controllers/meetController')

// Rotas
router.get('/meet', meetController.listMeetings)

module.exports = router