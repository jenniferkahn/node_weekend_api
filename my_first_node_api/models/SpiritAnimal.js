var mongoose = require('mongoose');
var SpiritAnimalSchema = new mongoose.Schema({
Name: String,
SpiritAnimal: String,
DoTheyLikeIt: Boolean

});

//schema makes sure code is validated
//String, Number, Date, Buffer, Bookean, Mixed, Array

module.exports = mongoose.mode('SpiritAnimal', SpiritAnimalSchema);


// What did we do here?
// exported a model
// that has a required schema --- like building lego land after reading the lego booklet.
// the name of the model is SpiritAnimal
// schema is here for - validation and to protect
