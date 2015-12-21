var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
Name: String
Description: String
});
module.exports = mongoose.model('Item', ItemSchema);
