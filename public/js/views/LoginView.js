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

            /*
            var model = new Backbone.Model();
            model.url = '/login';
            _.each(this.$("input,select,textarea").not("[type=submit]"), function (value, index){
                model.set($(value).attr('id'),$(value).val());
            });
            model.save();
            */
        }

    });

});