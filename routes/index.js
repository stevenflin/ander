var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/about', function(req, res, next) {
	res.render('about');
});

router.get('/list', function(req,res,next) {
	res.render('list');
});

module.exports = router;
