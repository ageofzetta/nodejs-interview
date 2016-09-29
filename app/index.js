var express = require('express');
var app = express();

app.use('/', function(req,res) {
	res.status(200).json(200,{response:'hello'});
});
app.listen(3000);

console.log('Server running @ 3000');

module.exports = app;
