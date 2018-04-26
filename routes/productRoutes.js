const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET products page. */
router.get('/', function(req, res, next) {
  knex('products').then(products => res.json(products))
});

router.post("/", function(req, res){
  console.log(req.body);
  knex("products").insert(req.body).then(()=>{
    res.json({success:true})
  })
})

module.exports = router;
