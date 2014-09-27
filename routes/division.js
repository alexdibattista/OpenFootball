var express = require('express');
var moment = require('moment');
var router = express.Router();


/* GET League. */
router.get('/', function(req, res) {
  var db = req.db;
  var collection = db.get("matches_collection");
  var div = req.query.div;
  var options = {
    "sort": {"Date": 1}
  };

  collection.find({"Div": div},options,function(e, matches){
    res.render("league",{
      matches: matches,
      division: matches[0].Div,
      moment: moment
    });
  });
  
});

module.exports = router;