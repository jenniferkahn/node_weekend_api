//we want to require our database connection for our app to use

require('./db/database');
var Song = require('./models/Song');


Song.find(function(error, songs){
if (error) console.log(error);
// console.log(songs);


});
