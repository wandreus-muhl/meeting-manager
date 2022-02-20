const {
  sequelize
} = require('sequelize')
const connection = require('../../database')

const database = {}
database.sequelize = sequelize
database.connection = connection

database.Meeting = require('./Meeting')(connection, sequelize)

module.exports = database