'use strict';

const api = module.exports = require('express').Router();

api
  .use('/texts', require('./texts'));

api.use((req, res) => res.status(404).end());
