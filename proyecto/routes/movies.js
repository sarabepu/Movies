var express = require('express');
const MongoUtils= require('../db/MongoUtils.js')
var router = express.Router();
const colName ="Movies";
/* GET users listing. */
router.get ('/', function(req, res, next) {
  
  MongoUtils.find((movies)=>{
    res.render("movies",{movies});

  }, 
  colName);
  
});
/*HACER ESTO*/ 
router.post ('/comment', function(req, res, next) {
  
  MongoUtils.find((list)=>{
    res.send(list);
  }, colName);
  
});

module.exports = router;
