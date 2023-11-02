function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(1,2)

// console.log("Result: ", result);

function logginUserMessage (username = 'Shubham') {
    // if(username === undefined){
    //     console.log("Please enter a Username");
    //     return
    // }
    if(!username){
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged In`
}

const message = logginUserMessage()
// console.log(message);

function calculateCartPrice(val1, val2, ...price1) {
    return price1
}

console.log(calculateCartPrice(200,400,400));

const user = {
    username: "Shubham",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2];
}

// const returnArray = returnSecondValue(myNewArray)
// console.log(returnArray);

console.log(returnSecondValue([100,500,300,400]));