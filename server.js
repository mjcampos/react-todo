var express = require('express');

// Create our App
var app = express();

app.use(express.static('public'));

var port = 3000;

app.listen(port, function() {
	console.log('Express server is up at port ' + port);
})