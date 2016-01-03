/* global describe, it */
'use strict'

var ndarray = require('ndarray')
var ndt = require('ndarray-tests')
var linspace = require('../')
var assert = require('chai').assert
var pool = require('ndarray-scratch')

describe('linspace', function () {
  it('create a new linspace with and endpoint', function () {
    var x = linspace(0, 1, 11)
    var y = ndarray([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1])
    assert(ndt.equal(x, y, 1e-8))
  })

  it('create a new linspace without and endpoint', function () {
    var x = linspace(0, 1, 10, {endpoint: false})
    var y = ndarray([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9])
    assert(ndt.equal(x, y, 1e-8))
  })

  it('allows a dtype', function () {
    var x = linspace(0, 10, 5, {dtype: 'int8'})
    var y = ndarray([0, 2, 5, 7, 10])
    assert(ndt.equal(x, y, 1e-8))
  })

  it('writes in place if output array provided', function () {
    var x = pool.zeros([10])
    linspace(x, 0, 1, 10, {endpoint: false})
    var y = ndarray([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9])
    assert(ndt.equal(x, y, 1e-8))
  })

  it('fills in more than one dimension', function () {
    var x = pool.zeros([2, 2])
    linspace(x, 0, 1, 2)
    var y = ndarray([0, 0, 1, 1], [2, 2])
    assert(ndt.equal(x, y, 1e-8))
  })

  it("throws an error if the size of the first dimension doesn't match the number of points", function () {
    var x = pool.zeros([2,2])
    assert.throws(function () {
      linspace(x, 0, 1, 10)
    }, Error, 'must match')
  })
})

