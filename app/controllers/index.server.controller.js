exports.render = (req,res) => {
	// res.status(200).json({response:'hello'});
	res.render('index', {
		title:'Hello World!'
	});
};
