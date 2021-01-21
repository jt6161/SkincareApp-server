const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET thcproducts page. */
router.get('/', function(req, res, next) {
  knex('thcproducts').then(products => res.json(products))
});

module.exports = router;
