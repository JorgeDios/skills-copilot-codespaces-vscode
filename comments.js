// Create web server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());

// Read comments from file
app.get('/comments', function (req, res) {
  fs.readFile('comments.json', function (err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// Write comments to file
app.post('/comments', function (req, res) {
  fs.writeFile('comments.json', JSON.stringify(req.body, null, 4), function (err) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.body, null, 4));
  });
});

// Start server
app.listen(3001, function () {
  console.log('Server listening on port 3001');
});