var express = require('express');
const MongoUtils= require('../db/MongoUtils.js')
var router = express.Router();
const colName ="Movies";
/* GET users listing. */
router.get ('/', function(req, res, next) {
  
  MongoUtils.find((list)=>{
    res.send(list);
  }, colName);
  
});

router.post ('/', function(req, res, next) {
  
  MongoUtils.find((list)=>{
    res.send(list);
  }, colName);
  
});

module.exports = router;
