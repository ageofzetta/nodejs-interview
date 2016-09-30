module.exports = (app) => {
	var index = require('../controllers/index.server.controller');
	app.route('/')
		// .post(users.create)
		.get(index.render)
		.post(index.save);
};
