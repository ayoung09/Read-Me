const Text = require('../../models/text');

module.exports = require('express').Router()

  .get('/', (req, res, next) =>
    Text.findAll()
    .then(texts => {
      console.log('Got to api text route and texts are: ', texts);
      res.json(texts)})
    .catch(next))

  .get('/:textId', (req, res, next) =>
    Text.findById(req.params.textId)
    .then(text => res.json(text))
    .catch(next));
