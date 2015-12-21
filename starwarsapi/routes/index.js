var express = require('express');
var router = express.Router();
var model = require('../models/Movie');

/* GET all Movies */
router.get('/', function(req, res, next) {
  model.find(function(err, movies) {
    if (err) console.log(err);
    res.json(movies);
  });
});

//** Get movie by ID
router.get('/:id', function(req, res, next){
  model.findById(req.params.id, function(err, movies)
  {
    if (err) console.log(err);
    res.json(movies);
    });
});
































module.exports = router;
