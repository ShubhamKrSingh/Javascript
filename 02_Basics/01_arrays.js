//  Arrays

const myArrays = [0, 1, 2, 3, 4, 5]

const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArrays[2]);

// Array methods

// myArrays.push(6)
// myArrays.push(7)
// myArrays.pop()

// myArrays.unshift(9)
// myArrays.shift()

// console.log(myArrays.includes(9));
// console.log(myArrays.indexOf(9));

const newArr = myArrays.join()

// console.log(myArrays);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArrays);

const myNewArr = myArrays.slice(1,3)

console.log(myNewArr);
console.log("B ", myArrays);

const myNewArr2 = myArrays.splice(1,3)
console.log(myArrays);
console.log(myNewArr2);