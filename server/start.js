'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {resolve} = require('path');

const db = require('../models');

const app = express();

module.exports = app
  .use(bodyParser.urlencoded({extended: true }))
  .use(bodyParser.json())

  .use(express.static(resolve(__dirname, '..', 'public')))

  .use('/api', require('./api'))

  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))


  .use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
    next();
  });

app.listen(1337, () => {
    console.log('--- The Server is listening intently on Port 1337 ---');
    db.sync()
    .then(() => {
      console.log('Database is synced up and ready to go!');
    })
    .catch(error => {
      console.error('Trouble syncing the database!', error, error.stack);
    });
  });
