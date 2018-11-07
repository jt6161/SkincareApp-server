const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET medibles page. */
router.get('/', function (req, res, next) {
    knex('medibles').then(products => res.json(products))
});

//Don't need the route below since the user is not posting anything
// router.post("/", function (req, res) {
//     console.log(req.body);
//     knex("medibles").insert(req.body).then(() => {
//         res.json({
//             success: true
//         })
//     })
// })

module.exports = router;