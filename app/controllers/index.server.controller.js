let controller = {};


controller.render = (req,res) => {
	// res.status(200).json({response:'hello'});
	if(req.session.lastVisit){
		console.log(req.session.lastVisit);
	}
	req.session.lastVisit = new Date();
	res.render('index', {
		title:'No no no!'
	});
};

controller.save = (req,res,next) => {
	if(!req.body){
		return false;
	}
	res.json(req.body);
};

module.exports = controller;
