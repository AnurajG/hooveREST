var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/hoover', function(req, res, next) {
  res.render('hoover', { title: 'Hoov it up!' });
});



module.exports = router;
