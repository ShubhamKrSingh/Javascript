// # Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

const BigNumber = 345637477657846846n

// Reference (Non Primitive)

// Array, Objects, Functions

// const heros = ["shaktiman","naagraj","doga"];

// let myObj = {
//     name: "Shubham",
//     age: 22,
// }

// const myFunction = function () {
//     console.log("Hello World");
// }

// console.log(typeof myFunction);

// +++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++

// Stack (primitive) , Heap (Non - Primitive)

let myYoutubeName = "shubhamsinghdotcom"

let anotherName = myYoutubeName

anotherName = "newName"

console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email: "shubham@test.com",
    upi: "shubham@ybl",

}

let userTwo = userOne

userTwo.email = "test@shubham.com"

console.log(userOne.email);
console.log(userTwo.email);
