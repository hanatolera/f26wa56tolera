
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // Generate a random value
  var x = Math.random() * 100;

  
  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  }

  // Apply Math.ceil()
  var y = Math.ceil(x);

 
  res.send(`Math.ceil applied to ${x} is ${y}`);
});

module.exports = router;
