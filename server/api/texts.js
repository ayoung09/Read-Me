const Text = require('../../models/text');

module.exports = require('express').Router()

  .get('/', (req, res, next) =>
    Text.findAll({where: req.query})
    .then(texts => res.json(texts))
    .catch(next))

  .get('/:textId', (req, res, next) =>
    Text.findById(req.params.textId)
    .then(text => res.json(text))
    .catch(next));
