const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET admin page. */
router.post('/login', function(req, res, next) {
  knex("admin").where("username", req.body.username).then((result)=>{
      let admin = result[0];
      if(admin.password.toLowerCase() === req.body.password.toLowerCase()){
        delete admin.password;
        res.json({success:true, admin: admin})
      }else{
        res.json({success:false})
      }

    }).catch(()=>{
      res.json({success:false})
    })
});

module.exports = router;
