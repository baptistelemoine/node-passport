
var express = require('express');
var path = require('path');
var app = module.exports = express();

app.configure(function () {
    //app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/login', function (req, res) {
	res.send('login here') ;
});

app.use(function(req, res) {
  var newUrl = req.protocol + '://' + req.get('Host') + '/#' + req.url;
  return res.redirect(newUrl);
});
app.listen(8000);