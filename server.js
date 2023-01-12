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

app.use(express.static(__dirname + '/public'));
app.use(express.static('images'));
app.use(express.static('public'));

// index page
app.get('/', function(req, res) {
  // res.render('pages/index2');
  res.render('pages/index');
});


//aboutme.txt
app.get('/text-content', function(req, res) {
  fs.readFile('public/textfiles/aboutme.txt', 'utf8', function(err, data) {
    if (err) throw err;
    let output = data.replace(/(?:\r\n|\r|\n)/g, '<br>');
    res.send(output);
});
});


//for resume pdf in header nav link
app.get('/pdf', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline');
  res.sendFile(__dirname + '/public/pdfs/resume.pdf');
});


app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

