

(function( ) {
var Game = function(canvasId) {
  var canvas = document.getElementById('canvasId');
  var screen = canvas.getContext('2d');
};
  //functions to draw to cnavas
  var gameSize = { x: canvas.width, y: canvas.height};

console.log('hi');

 var self = this;
 var tick = function() {
self.update();
self.draw(screen, gameSize);

//call tick once, update game,  draw game, and call request to tell browser to run this in the near future
requestAnimationFrame(tick);

 };

tick();


}) ;
Game.prototype = {
update: function(){


},

draw: function(screem, gameSize) {
  for(var i = 0; i < this.bodies.length; i++){
    drawRect(s);
  }

screen.fillRect(30, 30, 40, 40);



var player = function(game, gameSize) {
this.size = { x: 15, y: 15};
this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.x};

};
Player.prototype = {
update: function() {

},

};
window.onload = function() {
};
  newGame("screen");

}  };
