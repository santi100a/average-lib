"use strict";
var sum = require("@santi100/summation-lib");
module.exports = function average(array) {
    var s = sum(array);
    var len = array.length;
    return s / len;
};
