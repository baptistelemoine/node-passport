var express = require('express'),
    passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy,
    path = require('path');

var users = [];

passport.use(new TwitterStrategy({
		consumerKey: '9aXp2Ky0UGI9o8DsvPaKCA',
		consumerSecret: 'JbigkeMAXafm9OXl52hbYuK3aR1fJm63N2wZJmCQ',
		callbackURL: "http://test.passport-twitter.com:8000/auth/twitter/callback"
	},
	function (token, tokenSecret, profile, done) {
		var user = users[profile.id] ||
					(users[profile.id] = { id: profile.id, name: profile.username });
		done(null, user);
	}
));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	var user = users[id];
	done(null, user);
});

application = express();

application.configure(function() {
	application.use(express.bodyParser());
	application.use(express.methodOverride());
	application.use(express.cookieParser());
	application.use(express.session( { secret: '498f99f3bbee4ae3a075eada02488464' } ));
	application.use(passport.initialize());
	application.use(passport.session());
	application.use(application.router);
	application.use(express.errorHandler({ showStack: true, dumpExceptions: true }));
	application.use(express.static(path.join(__dirname, '/public')));
});

application.get('/home', function (request, response) {
	console.log(request.user);
	response.send('hello');
});

application.get('/auth/twitter', passport.authenticate('twitter'));

application.get('/auth/twitter/callback',
	passport.authenticate('twitter', { successRedirect: '/home', failureRedirect: '/auth/twitter' }));

application.listen(8000);