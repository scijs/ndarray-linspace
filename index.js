'use strict'

var pool = require('ndarray-scratch')
var fill = require('ndarray-fill')

module.exports = linspace

var defaults = {
  endpoint: true,
  dtype: 'double'
}

function linspace () {
  var start, end, n, options, output

  if (Number.isFinite(arguments[0])) {
    start = arguments[0]
    end = arguments[1]
    n = arguments[2]
    options = Object.assign({}, defaults, arguments[3] || {})
    output = pool.zeros([n], options.dtype)
  } else {
    output = arguments[0]
    start = arguments[1]
    end = arguments[2]
    n = arguments[3]
    options = Object.assign({}, defaults, arguments[4] || {})

    if (output.shape[0] !== n) {
      throw new Error('number of values (' + n + ') must match the first dimension of the output (' + output.shape[0] + ')')
    }
  }

  var d = (end - start) / (n - (options.endpoint ? 1 : 0))
  fill(output, function (i) {
    return start + i * d
  })

  return output
}
