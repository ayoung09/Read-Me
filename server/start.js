'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {resolve} = require('path');

const app = express();

module.exports = app
  .use(bodyParser.urlencoded({extended: true }))
  .use(bodyParser.json())

  .use(express.static(resolve(__dirname, '..', 'public')))

  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

  //.use('/api', require('./api'))

  .use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
    next();
  });

app.listen(1337, () => {
    console.log('--- The Server is listening intently on Port 1337 ---');
  });
