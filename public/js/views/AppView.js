define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'views/LoginView'

], function ($, _, Backbone, AppRouter, LoginView){

	return Backbone.View.extend({

		$container:$('#wrapper'),

		initialize:function(){

			_.bindAll(this, 'login');

			var router = new AppRouter();
			router.on('route:getLogin', this.login);
			Backbone.history.start({pushState:false});

		},

		login:function(){
			var login = new LoginView();
			this.$container.append(login.render().el);
		}


	});

});