const score = 300

// console.log(score);

const balance = new Number(100)

// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8564
// console.log(otherNumber.toPrecision(3));

const hundreds = 100000

// console.log(hundreds.toLocaleString('en-IN')); // en-IN for indian value

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(4,3,5,7,8,9));
// console.log(Math.max(4,3,5,7,8,9));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1) + min))