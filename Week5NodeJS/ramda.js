const R = require('ramda');

// console.log(R.add(2)(3));

// const sub = R.subtract(R.__, 2);
// console.log(sub(10));

// const mul = x => 2 * x;
// console.log(R.map(mul, [1, 2, 3, 4]));

// console.log(R.addIndex(R.map)(R.add, [10, 20, 30, 40]));


console.log(R.adjust([0, 2], R.toUpper, ['a', 'b', 'c', 'd']));