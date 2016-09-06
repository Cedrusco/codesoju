/*
	main app.js
*/

'use strict';
var path = require('path'),
	express = require('express'),
	app = express(),
	chalk = require('chalk');
	
//can be updated later based on env needs
var PORT = 1337;

require(__dirname + '/configuration/routes.js')(app);

app.use(express.static(path.join(__dirname, '../node_modules')));
// app.use(express.static('client/dist/'));
app.use(express.static('client/assets/'));
app.use(express.static(path.join(__dirname, '../')));
app.use('/', express.static(path.join(__dirname, 'views/')));

//Error catch
app.use(function (err, req, res, next) {
	console.error(err, typeof next);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});


app.listen(PORT, function () {
	console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
});
