'use strict';

const db = require('../../models');
const api = module.exports = require('express').Router();

api
  .use('/', (req, res, next) => {
    next();
  })
  .use('/texts', require('./texts'));

api.use((req, res) => res.status(404).end());
