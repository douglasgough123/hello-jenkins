var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello Dave. I like your ugly stupid hat.');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
