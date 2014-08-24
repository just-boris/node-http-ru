"use strict";
var codes = require('./codes.json');

module.exports = function(STATUS_CODES) {
    Object.keys(codes).forEach(function (code) {
        STATUS_CODES[code] = codes[code];
    });
};