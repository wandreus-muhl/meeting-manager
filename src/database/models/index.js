const {
  Sequelize
} = require('Sequelize')
const connection = require('../../database')

const database = {}
database.Sequelize = Sequelize
database.connection = connection

database.Meeting = require('./Meeting')(connection, Sequelize)

module.exports = database