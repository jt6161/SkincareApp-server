const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET admin page. */
router.get('/', function(req, res, next) {
  knex('admin').then(admin => res.json(admin))
});

module.exports = router;
