'use strict';

var ndarray = require('ndarray');
var linspace = require('../');
var show = require('ndarray-show');

console.log(show(linspace(ndarray([], [2]), 3, 10, {endpoint: false})));

console.log(show(linspace(ndarray([], [2]), 4, 10, {dtype: 'int8'})));
