var mongoose = require('mongoose');

var connectionString = "mongodb://localhost/AirplaneMates";

mongoose.connect(connectionString);

// events to listen to!
mongoose.connection.on('connected', function() {
  console.log("We are connected to the database")
});

mongoose.connection.on('error', function(error) {
  console.log("Oh no, error " + error)
});

mongoose.connection.on('disconnected', function() {
  console.log("Database disconnected")
});
