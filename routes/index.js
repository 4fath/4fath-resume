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

router.post('/*',function(req,res,next){
	res.setHeader('content-type', 'text/javascript');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	var dummyJson = {"response" : "what do you expect for that really ? its just a resume dude"};
	res.send(dummyJson);
});


module.exports = router;
