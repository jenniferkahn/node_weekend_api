//we start off by requiring our ORM
var mongoose = require('mongoose');

//this enforces validation....data types an more.
//schema accepts an argument of an object that defines Keys(names)
//and their corresponding data type
var SongSchema = new mongoose.Schema({
Song.String //must be a string
Album:String//must be a string

});

//we end by exporting a mongoose model
//when we export we need to give our model an application-wide name
//and specify what Schema to use!
module.exports = mongoose.model('Song', Schema);
