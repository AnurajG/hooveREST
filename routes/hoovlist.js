var express = require('express');
var router = express.Router();


/* GET Userlist page.*/ 
router.get('/', function(req, res) {
    var db = req.db;
    var city= req.param('city');
    var company=req.param('company');
    var collection = db.get('hoov');
    collection.col.aggregate([{$match: {"document.city": city},"document.company":company},{$project: {_hoov: "$document.hoov", upCount: {$size: {"$ifNull": ["$document.hoovUpIds",[]]}}}},{$sort: {"upCount":-1}}],function(e,docs){
        res.json(docs);
    });
});

module.exports = router;