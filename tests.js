const assert = require('assert');

const sum = require('./2sum');
const sortIntegerArr = sum.sortIntegerArr;
const count2sums = sum.count2sums;

assert.deepEqual([], sortIntegerArr([]));
assert.deepEqual([-1, 1], sortIntegerArr([1, -1]));


assert.deepEqual(0, count2sums([], 10, 10));
assert.deepEqual(1, count2sums([2, 8], 10, 11));
assert.deepEqual(2, count2sums([2, 3, 8], 10, 11));
assert.deepEqual(2, count2sums([2, 3, 7, 8], 10, 11));

console.log('Pass');
