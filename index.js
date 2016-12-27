'use strict';

var arr = [127];
var i = 31;

do {
  arr.unshift(i);
} while (i--);

module.exports = arr;
