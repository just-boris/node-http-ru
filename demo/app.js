"use strict";
var express = require('express');

var app = express();

require('../')(require('http').STATUS_CODES);

app.get('/:status', function(req, res) {
    res.status(req.params.status);
    res.send(req.params.status);
});
/// catch 404 and forward to error handler
app.use(function(req, res) {
    res.redirect('/200');
});


var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server listening on port ' + server.address().port);
});
