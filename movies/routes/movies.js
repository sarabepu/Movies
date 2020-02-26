var express = require('express');
const MongoUtils= require('../db/MongoUtils.js')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoUtils.getMovies((list)=>{
    res.send(list);
  });
  
});

module.exports = router;
