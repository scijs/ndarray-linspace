'use strict';

var ndarray = require('ndarray');
var ndt = require('ndarray-tests');
var linspace = require('../');
var test = require('tape');

test('fails if the first argument is not a ndarray', function (t) {
  t.throws(function () {
    linspace(0, 10);
  }, Error, /must be a ndarray/);
  t.end();
});

test('throws an error if the axis not a number', function (t) {
  t.throws(function () {
    linspace(ndarray([], [2, 2]), 0, 1, {axis: '4'});
  }, Error, 'Axis must be a nonegative integer');
  t.end();
});

test('throws an error if the axis is greater than the dimension', function (t) {
  t.throws(function () {
    linspace(ndarray([], [2, 2]), 0, 1, {axis: 4});
  }, Error, 'must be <= dimension');
  t.end();
});

test('fails if the endpoint is not a boolean', function (t) {
  t.throws(function () {
    linspace(ndarray([], [1]), 0, 10, {endpoint: 7});
  }, Error, /must be a boolean/);
  t.end();
});

test('create a new linspace with an endpoint', function (t) {
  var x = linspace(ndarray([], [11]), 0, 10);
  var y = ndarray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  t.assert(ndt.equal(x, y, 1e-8));
  t.end();
});

test('create a new linspace without an endpoint', function (t) {
  var x = linspace(ndarray([], [10]), 0, 10, {endpoint: false});
  var y = ndarray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  t.assert(ndt.equal(x, y, 1e-8));
  t.end();
});

test('fills in more than one dimension', function (t) {
  var x = linspace(ndarray([], [2, 2]), 0, 1);
  var y = ndarray([0, 0, 1, 1], [2, 2]);
  t.assert(ndt.equal(x, y, 1e-8));
  t.end();
});

test('accepts a different axis', function (t) {
  var x = linspace(ndarray([], [2, 2]), 0, 1, {axis: 1});
  var y = ndarray([0, 1, 0, 1], [2, 2]);
  t.assert(ndt.equal(x, y, 1e-8));
  t.end();
});

test('uses the first point if only one point requested an endpoint = true', function (t) {
  var x = linspace(ndarray([], [1]), 1, 2, {endpoint: true});
  var y = ndarray([1], [1]);
  t.assert(ndt.equal(x, y));
  t.end();
});

test('uses the first point if only one point requested an endpoint = false', function (t) {
  var x = linspace(ndarray([], [1]), 1, 2, {endpoint: false});
  var y = ndarray([1], [1]);
  t.assert(ndt.equal(x, y));
  t.end();
});

