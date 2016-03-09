var express = require('express');
var router = express.Router();
var fs = require('fs');

var colorJson = fs.readFileSync(__dirname + '/../data/color.json', 'utf8');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , nodeLinks: colorJson});
});

module.exports = router;
