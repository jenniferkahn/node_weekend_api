var express = require('express');
var router = express.Router();
var model = require('../models/Song');

//* GET all songs
router.get('/', function(req, res, next) {

model.findById(req.params.id, function(err, songs){
  if (err) console.log(err);
  res.json(songs);
  });
});


//GET song by id

//CREATE song by id
router.post('/:id', function(req, res){
  console.log(req.body);
  model.create (req.body, function(err, song) {
    if (err) console.log(err);
    res.json(song);
  });

});

//UPDATE song by id
router.put('/:id', function(req, res){
  model.findByIdAndUpdate(req.params.id, req.body, function(err, song) {
    if (err) console.log(err);
    res.json(song);
    });
  });

//DESTROY song by id
router.delete('/:id', function(req, res){
  model.findByIdAndRemove(req.params.id, req.body, function(err, song){
    if (err) console.log(err);
    res.json(song);

  });

});


module.exports = router;
