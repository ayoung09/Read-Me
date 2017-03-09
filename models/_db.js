var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/read_me', {
  logging: false
});

module.exports = db;
