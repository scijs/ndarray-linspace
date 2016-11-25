/* global describe, it */
'use strict';

var ndarray = require('ndarray');
var ndt = require('ndarray-tests');
var linspace = require('../');
var assert = require('chai').assert;
// var show = require('ndarray-show');

describe('linspace', function () {
  describe('failure modes', function () {
    it('fails if the first argument is not a ndarray', function () {
      assert.throws(function () {
        linspace(0, 10);
      }, Error, /must be a ndarray/);
    });

    it('throws an error if the axis not a number', function () {
      assert.throws(function () {
        linspace(ndarray([], [2, 2]), 0, 1, {axis: '4'});
      }, Error, 'Axis must be a nonegative integer');
    });

    it('throws an error if the axis is greater than the dimension', function () {
      assert.throws(function () {
        linspace(ndarray([], [2, 2]), 0, 1, {axis: 4});
      }, Error, 'must be <= dimension');
    });

    it('fails if the endpoint is not a boolean', function () {
      assert.throws(function () {
        linspace(ndarray([], [1]), 0, 10, {endpoint: 7});
      }, Error, /must be a boolean/);
    });
  });

  it('create a new linspace with and endpoint', function () {
    var x = linspace(ndarray([], [11]), 0, 10);
    var y = ndarray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert(ndt.equal(x, y, 1e-8));
  });

  it('create a new linspace without and endpoint', function () {
    var x = linspace(ndarray([], [10]), 0, 9, {endpoint: false});
    var y = ndarray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert(ndt.equal(x, y, 1e-8));
  });

  it('fills in more than one dimension', function () {
    var x = linspace(ndarray([], [2, 2]), 0, 1);
    var y = ndarray([0, 0, 1, 1], [2, 2]);
    assert(ndt.equal(x, y, 1e-8));
  });

  it('accepts a different axis', function () {
    var x = linspace(ndarray([], [2, 2]), 0, 1, {axis: 1});
    var y = ndarray([0, 1, 0, 1], [2, 2]);
    assert(ndt.equal(x, y, 1e-8));
  });

  it('uses the first point if only one point requested and endpoint = true', function () {
    var x = linspace(ndarray([], [1]), 1, 2, {endpoint: true});
    var y = ndarray([1], [1]);
    assert(ndt.equal(x, y));
  });

  it('uses the first point if only one point requested and endpoint = false', function () {
    var x = linspace(ndarray([], [1]), 1, 2, {endpoint: false});
    var y = ndarray([1], [1]);
    assert(ndt.equal(x, y));
  });
});

