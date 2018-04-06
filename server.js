//Requiring NPM Packages/Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const request = require('request');

//Requiring models
const db = ('./models');

const PORT = 3000;

// initialize express
const app = express();

//use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars')


mongoose.Promise = Promise;
// connect to mongoDB
mongoose.connect('mongodb://localhost/NewsStand');

// Routes
// request('https://techcrunch.com/', function(err, res, html) {
// 	const $ = cheerio.load(html);

// })

app.listen(PORT, function(err) {
	if (err) {
		throw err;
	} else {
		console.log('')
	}
});