const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET medibles page. */
router.get('/', function (req, res, next) {
    knex('medibles').then(products => res.json(products))
});

module.exports = router;
