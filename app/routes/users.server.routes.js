module.exports = (app) => {

	let users = require('../controllers/users.server.controller');

	app.route('/users')
		.get(users.list)
		.post(users.create)
		;

	app.route('/users/:userId')
		.get(users.read)
		.put(users.update)
		.delete(users.delete)
		;

	app.param('userId', users.userByID);


};
/*
curl -X POST -H "Content-Type: application/json" -d '{ "firstName" : "Orlando", "lastName" : "Peña", "email" : "op@mycampaign.io", "username" : "esnake", "password" : "orly" }' localhost:3000/users/
*/
