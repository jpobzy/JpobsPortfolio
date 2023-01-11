'use strict';


const express = require('express');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

const fs = require('fs');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.use(express.static(__dirname + '/public'));
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// projects page
app.get('/projects', function(req, res) {
  res.render('pages/projects');
});

//contact info page
app.get('/contact-info', function(req, res) {
  res.render('pages/contact-info');
});


//aboutme.txt
app.get('/text-content', function(req, res) {
  fs.readFile('public/textfiles/aboutme.txt', 'utf8', function(err, data) {
    if (err) throw err;
    let output = data.replace(/(?:\r\n|\r|\n)/g, '<br>');
    res.send(output);
});
});




app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

