var app = app || {};
var active = active || {};
//var app = app for a new object
//var active equals active for the new object

//app initiation
//onloading events
//the first things we need to do
//instantiation and placing things in the active namespace
window.onload = function(evt) {
  console.log('The window has loaded');
  //other code here
active.newThing = new app.models.BaseModel({
  el: $('body'),
  initialize: funciton() {
    console.log("I'm a real boy");
    }
  });
}
