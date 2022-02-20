
const { Router } = require('express');
const meeting = require('../routes/meeting.routes')

module.exports = server => {
  server.use((req, res, next) => {
    meeting(server, new Router());
    next();
  });
}