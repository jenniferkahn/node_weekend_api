// mongoose is my ORM
var mongoose = require('mongoose');

// specify protocol://server/dbname
var connectionString = "mongodb://localhost/britney";

// physically connect to mongodb
mongoose.connect(connectionString);

// events to listen to!
mongoose.connection.on('connected', function() {
});

mongoose.connection.on('error', function(error) {
});

mongoose.connection.on('disconnected', function() {
});
