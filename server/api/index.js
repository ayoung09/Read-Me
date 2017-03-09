'use strict';

const api = module.exports = require('express').Router();

api
  .use('/transcriber', require('./transcriber'));

api.use((req, res) => res.status(404).end());
