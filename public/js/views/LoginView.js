define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login.html',
    'router'

    ], function ($, _, Backbone, LoginTemplate, AppRouter) {

    return Backbone.View.extend({
        
        initialize:function(options) {
          
          _.bindAll(this, 'render', 'onSubmit');

        },

        events:{
			'click #btnSubmit'	:'onSubmit'
        },

        template:_.template(LoginTemplate),

        render:function(){
			this.$el.html(this.template());
			return this;
        },

        onSubmit:function(e){
			e.preventDefault();
			var router = new AppRouter();
			router.navigate('/login', {trigger:true, replace:true});
        }

    });

});