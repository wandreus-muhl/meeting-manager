const sequelize = require('sequelize')
require('dotenv').config()

class Database {
  constructor() {
    this.connect()
  }

  connect() {
    const connection = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT
    })
    return connection
  }
}

module.exports = new Database.connect()
