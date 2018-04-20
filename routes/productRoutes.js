const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET products page. */
router.get('/', function(req, res, next) {
  knex('products').then(products => res.json(products))
});

module.exports = router;
