'use strict';

var fill = require('ndarray-fill');
var isndarray = require('isndarray');
var isnonneg = require('validate.io-nonnegative-integer');
var isbool = require('validate.io-boolean');

module.exports = linspace;

function linspace (output, start, end, options) {
  var n, endpoint, axis, d;

  if (!isndarray(output)) {
    throw new Error('ndarray-linspace: First argument must be a ndarray');
  }

  n = output.shape[0];

  options = options || {};

  if (options.endpoint !== undefined && !isbool(options.endpoint)) {
    throw new Error('ndarray-linspace: Endpoint must be a boolean. Got ' + options.endpoint);
  }
  endpoint = !!(options.endpoint || true);

  if (options.axis !== undefined && !isnonneg(options.axis)) {
    throw new Error('ndarray-linspace: Axis must be a nonegative integer. Got ' + options.axis);
  }

  // Default axis, after we've checked the input
  axis = options.axis || 0;

  if (axis > output.dimension) {
    throw new Error('ndarray-linspace: Axis (' + axis + ') must be <= dimension (' + output.dimension + ')');
  }

  // Precompute the spacing:
  d = (end - start) / Math.max(1, n - (endpoint ? 1 : 0));

  // Fill it!
  fill(output, function () {
    return start + arguments[axis] * d;
  });

  return output;
}
