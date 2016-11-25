# ndarray-linspace [![Build Status](https://travis-ci.org/scijs/ndarray-linspace.svg)](https://travis-ci.org/scijs/ndarray-linspace) [![npm version](https://badge.fury.io/js/ndarray-linspace.svg)](https://badge.fury.io/js/ndarray-linspace) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Fill an ndarray with equally spaced values

## Example

```javascript
var ndarray = require('ndarray');
var linspace = require('ndarray-linspace');

linspace(ndarray([], [5]), 2, 3);
// => ndarray([2, 2.25, 2.5, 2.75, 3])

linspace(ndarray([], [5]), 2, 3, {endpoint: false});
// => ndarray([2, 2.25, 2.5, 2.75])

linspace(ndarray([], [2, 2]), 0, 1)
// y => [ 0, 0 ]
//      [ 1, 1 ]

linspace(ndarray([], [2, 2]), 0, 1, {axis: 1})
// y => [ 0, 1 ]
//      [ 0, 1 ]
```

## Installation

```bash
npm install ndarray-linspace
```

## API

#### `require('ndarray-linspace')(output, start, end[, options])`
An array of equally spaced values.

**Arguments**:
- `output` The destination array to be filled with values.
- `start`: starting value of the interval
- `end`: ending value of the interval
- `options` (optional): A hash of options. Options are:
  - `endpoint` (default: `true`): whether the output contains the endpoint of the interval
  - `axis` (default: `0`): the dimension along which to fill the array. Must be an integer less than or equal to the dimension of the input.

**Returns**: A reference to the output

## License
&copy; 2015 Ricky Reusser. MIT License.
