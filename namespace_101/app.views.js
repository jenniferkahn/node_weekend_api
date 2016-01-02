var app = app || {};
var active = active || {};

app.views = app.views || {};

app.views.BaseView = Backbone.View.extend();
app.views.ModalView = Backbone.View.extend();
app.views.LoginView = Backbone.View.extend();

//to instantiate those above you should:
//active.registrationView = new app.views.LoginView();
