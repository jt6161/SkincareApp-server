const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET products page. */
router.get('/', function(req, res, next) {
  knex('thcproducts').then(products => res.json(products))
});

router.post("/", function(req, res){
  console.log(req.body);
  knex("thcproducts").insert(req.body).then(()=>{
    res.json({success:true})
  })
})

module.exports = router;
