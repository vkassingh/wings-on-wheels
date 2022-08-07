var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	return res.render('index.ejs');
});

router.get('/contact', function (req, res, next) {
	return res.render('contact.ejs');
});

module.exports = router;