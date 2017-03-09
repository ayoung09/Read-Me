var Sequelize = require('sequelize');
var db = require('./_db');

var Text = db.define('texts', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
});

module.exports = Text;
