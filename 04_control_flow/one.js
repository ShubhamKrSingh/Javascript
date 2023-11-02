// if

// const isUserLoggedIn = true;

// if(isUserLoggedIn){
//     console.log("Hello User");
// }

// if(2 == "2"){
//     console.log("Executed");
// }

// const temperature = 42;

// if(temperature < 50){
//     console.log("Temperature is less than 50");
// }else{
//     console.log("Temperature is greater than 50");
// }

// > , < , >= , <= , == , != , === , !==

// const score = 200;

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"),
// console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750 but greater than 500");
// }else if(balance < 900){
//     console.log("less than 900 but greater than 750");
// }else if(balance < 1200){
//     console.log("less than 1200 but greater than 900");
// }

const isUserLoggedIn = true;
const debitCard = false;
const loggedInFromGoogle = false;
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
else console.log("Not Allowed to this course purchase");

