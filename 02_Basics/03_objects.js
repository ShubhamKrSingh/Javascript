// singleton

// Object.create

// object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name: "Shubham",
    "full name": "Shubham Singh",
    [mySymbol]: "myKey1",
    age: 18,
    location: "Patna",
    email: "shubham@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}
console.log(jsUser);

// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser["email"]);

// console.log(typeof (jsUser[mySymbol]));

// Object.freeze(jsUser)
jsUser.email = "shubham@chatgpt.com"
// console.log(jsUser);

jsUser.greeting = function(){
    // console.log("Hello Js User");
    console.log(`Hello JS User ${this["full name"]}`);
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());