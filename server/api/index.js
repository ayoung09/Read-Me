'use strict';

const db = require('../../models');
const api = module.exports = require('express').Router();

api
  .use('/', (req, res, next) => {
    console.log('GOT TO API ROUTER');
    next();
  })
  .use('/texts', require('./texts'));

api.use((req, res) => res.status(404).end());
