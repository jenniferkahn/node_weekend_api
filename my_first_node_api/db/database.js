//require mongoose
//make a connection String
//yours should connect to your db
// and handle connected, disconnected and error events!
var mongoose = require('mongoose');
var SpiritAnimalSchema = mongoose.Schema({
Name: String,
SpiritAnimal: String,
DoTheyLikeIt: Boolean
});
 //schema makes sure code is validated
//String, Number, Date, Buffer, Bookean, Mixed, Array
module.exports = mongoose.mode('SpiritAnimal', SpiritAnimalSchema);
