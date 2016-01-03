# ndarray-linspace [![Build Status](https://travis-ci.org/scijs/ndarray-linspace.svg)](https://travis-ci.org/scijs/ndarray-linspace) [![npm version](https://badge.fury.io/js/ndarray-linspace.svg)](https://badge.fury.io/js/ndarray-linspace) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Fill an ndarray with equally spaced values

## Example

```javascript
var linspace = require('ndarray-linspace')

linspace(2, 3, 5)
// => ndarray([2, 2.25, 2.5, 2.75, 3])

linspace(2, 3, 4, {endpoint: false})
// => ndarray([2, 2.25, 2.5, 2.75])

linspace(2, 4, 10, {dtype: 'int8'})
// => ndarray([2, 2, 2, 2, 2, 3, 3, 3, 3, 4])

var y = pool.zeros([5])
linspace(y, 1, 3, 5)
// y => ndarray([1, 1.5, 2, 2.5, 3])

var y = pool.zeros([2, 2])
linspace(y, 0, 1, 2)
// y => [ 0, 0 ]
//      [ 1, 1 ]

```

## Installation

```bash
npm install ndarray-linspace
```

## API

#### require('ndarray-linspace')([output,] start, end, steps[, options])
An array of equally spaced values.

Arguments:
- `output` (options): if provided, the destination array to be filled with values. If the number of dimensions is greater than one, then the length of the first dimension must match the number of values and the entire ndarray will be filled with the linspace corresponding to the index of the first dimension.
- `start`: starting value of the interval
- `end`: ending value of the interval
- `steps`: number of divisions
- `options` (optional): A hash of options. Options are:
  - `dtype`: dtype of output array (only used if output array not specified)
  - `endpoint` (boolean): whether the output contains the endpoint of the interval

## License
&copy; 2015 Ricky Reusser. MIT License.
