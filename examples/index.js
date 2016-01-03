'use strict'

var linspace = require('../')

console.log(linspace(2, 3, 10, {endpoint: false}))

console.log(linspace(2, 4, 10, {dtype: 'int8'}))
