let config = require('./config'),
	mongoose = require('mongoose');

module.exports = () => {
	let db = mongoose.connect(config.db);

	require('../app/models/users.server.model');

	return db;
};
