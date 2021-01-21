const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET testimonials page. */
router.get('/', function(req, res, next) {
  knex('testimonials').then(testimonials => res.json(testimonials))
});

router.post("/", function(req, res){
  console.log(req.body);
  knex("testimonials").insert(req.body).then(()=>{
    res.json({success:true})
  })
})

module.exports = router;
