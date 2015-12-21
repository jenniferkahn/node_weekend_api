var mongoose = require ('mongoose');
//REQUIRE MONGOOSE FIRST

var AirplaneMatesSchema = new mongoose.Schema({
  Name: String,
  SeatNumber: String,
  Contentness: Boolean
  });


//RUN MONGOOSE
module.exports = mongoose.model('AirplaneMates', AirplaneMatesSchema);
