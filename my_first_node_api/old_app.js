var http = require('http');
require('./db/database');
var SpiritAnimal = require('./models/SpiritAnimal');


//add argument(s)

SpiritAnimal.create({
  Name: "Aaron",
  SpiritAnimal: "Red Panda"

},
function(error, animal){
  if (error) console.log(error);
  console.log(animal);
}
);

http.createServer(function(req, res) {
SpiritAnimal.find(function(error, animals){
 if (error) console.log(error);
 res.writeHead(200); //set status to 200
 res.write(animals);
 res.end();
  });
}).listen(8080);

console.log('api server is running!');
