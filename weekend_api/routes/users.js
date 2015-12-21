var express = require('express');
var router = express.Router();
var model = require('../models/users');

/* GET home page. */
router.get('/', function(req, res) {
  model.find(function(error, users) {
    if (error) console.log(error);
    res.json(users);

  })
});

// CREATE USERS
router.post('/', function (req,res) {
  console.log(req.body);
  model.create(req.body, function(error,users) {
    if (error) console.log(error);
    res.json(users);
  });
});

// GET users by id
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(error, users) {
    if (error) console.log(error);
    res.json(users);

  });
});

// UPDATE users by id
router.put('/:id', function (req,res){
  model.findByIdAndUpdate(req.params.id, req.body, function(error, users) {
    if (error) console.log(error);
    res.json(users);
  });
});

router.patch('/:id', function (req,res){
  model.findByIdAndUpdate(req.params.id, req.body, function(error, users) {
    if (error) console.log(error);
    res.json(users);
  });
});

// DESTROY users by id
router.delete('/:id', function(req,res) {
  model.findByIdAndRemove(req.params.id, req.body, function(error,users){
    if (error) console.log(error);
    res.json({"Message": "Your item was deleted."});
  });
});

module.exports = router;
