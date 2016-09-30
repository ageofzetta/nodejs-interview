let config = require('./config');
let express = require('express');
let morgan = require('morgan');
let compress = require('compression');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let session = require('express-session');

// let config = require()
module.exports = () => {
	let app = express();
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

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);

	app.use(express.static('./public'));

	return app;

};
