var app = app || {};
var active = active || {};

app.models = app.models || {};
//app.models is not equal to app.models OR new object

//place of your models in here in one file
app.models.BaseModel = Backbone.Model.extend();
app.models.AuthenticationModel = Backbone.Model.extend();
app.models.ApiKeyModel = Backbone.Model.extend();

//if you wanted to use these somewhere down the line
//active.someModel = new app.models.BaseModel();
//because they are namespaced like this they are always accessible and you now have a place for all of your models to live
