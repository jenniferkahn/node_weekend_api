require ('./db/database');
var Item = require('./models/Item');

Item.find(function(error, items){
if (error) console.log(error);

});
