const user = {
    userName: "Shubham",
    price: 990,
    
    welcomeMesage: function(){
        console.log(`${this.userName} , Welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMesage();
// user.userName = 'Shyam';
// user.welcomeMesage();

// console.log(this);

// function chai(){
//     let userName = 'Shubham'
//     console.log(this.userName);
// }

// chai();

// const chai = function(){
//     let userName = 'Shubham'
//     console.log(this.userName);
// }

const chai = () => {
    let userName = 'Shubham'
    console.log(this);
}

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (
//     num1 + num2
// );

const addTwo = (num1, num2) => (
    {
        name: 'Shubham Singh'
    }
);

console.log(addTwo(5,7));

// const myArray = [2,4,3,7,6]

// myArray.forEach(() => {})