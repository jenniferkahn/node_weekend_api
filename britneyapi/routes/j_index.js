var express = require('express');
var router = express.Router();
var model = require('../models/Song')
/* GET home page. */
router.get('/', function(req, res, next) {
  model.find(function(err, songs) {
    if (err) console.log(err);
    res.json(songs);
  });
});

router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, songs) {
    if (err) console.log(err);
    res.json(songs);
  });
});

router.put('/:id', function(req, res) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, song) {
    if (err) return err;
    res.json(song);
  });
});

router.patch('/:id', function(req, res) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, song) {
    if (err) return err;
    res.json(song);
  });
});

router.post('/', function(req, res) {
  console.log(req.body);
  model.create(req.body, function(err, song) {
    if (err) console.log(err);
    res.json(song);
  });
});

module.exports = router;
