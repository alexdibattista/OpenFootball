var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get("matches_collection");
  // var start = Date(2014, 9, 1); 
  // var end = Date(2014, 9, 24);
  // console.log(start);
  // collection.find({$or: [{Div: "Serie A"}, {Div: "Serie B"} ]},{}, function(e, docs){
  //   res.render("index",{
  //     "matches": docs
  //   });
  // });

  collection.distinct("Div",{},function(e, divisions){
    res.render("index",{
      "divisions": divisions
    });
  });
  
});

module.exports = router;
