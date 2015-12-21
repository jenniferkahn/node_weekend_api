var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


var drinks = [
  {
  name: 'lemonade',
  drunkness: 0

  },
  {
  name: 'zombie Dust',
  drunkness: 4
  },
  {
    name: 'jameson',
    drunkness: 5
  }
];

var burrito = "I love burritos";



res.render('pages/index', {
   title: 'Express',
   drinks: drinks,
   burrito: burrito

 });
});

module.exports = router;
