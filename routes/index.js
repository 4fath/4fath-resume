var express = require('express');
var router = express.Router();
var path    = require("path");

/* GET home page. */
router.get('/tr', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/resume.html'));
});

router.get('/en', function(req, res, next){
	res.sendFile(path.join(__dirname+'/resume_en.html'));
});

router.get('/*', function(req, res, next){
	res.redirect('/tr');
});

router.get('/tr*', function(req, res, next){
	res.redirect('/tr');
});


router.get('/en*', function(req, res, next){
	res.redirect('/en');
});


module.exports = router;
