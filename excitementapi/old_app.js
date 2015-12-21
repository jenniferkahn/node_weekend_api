//require express

var express = require('express')

//run express//start out application
var app = express();

var excitingThings = {
    "Star Wars": "SOON",
    "Red Bull": "Gives me wings",
    "EXPRESSS": "Fucking Awesome"

};

app.get('/', function(request, response){
  response.send(excitingThings);
  console.log('GET /')
};

//can listen on any port
app.listen(1337);
console.log(my app is running on port 1337);
