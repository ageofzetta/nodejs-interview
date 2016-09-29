var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// var config = require()
module.exports = function() {
	var app = express();
	if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}else{
		app.use(morgan('dev'));
	}

	app.use(bodyParser.urlencoded({
		extended:true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	require('../app/routes/index.server.routes.js')(app);
	return app;

};
