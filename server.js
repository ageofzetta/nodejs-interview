process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let mongoose = require('./config/mongoose');
let express = require('./config/express');
let db = mongoose();
let app = express();
app.listen(3000);
module.exports = app;

console.log('Server running @ http://localhost:3000');
