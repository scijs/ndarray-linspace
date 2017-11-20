'use strict';

var ndarray = require('ndarray');
var linspace = require('../');

console.log(linspace(ndarray([], [2]), 3, 10, {endpoint: false}));

console.log(linspace(ndarray([], [2]), 4, 10, {dtype: 'int8'}));
