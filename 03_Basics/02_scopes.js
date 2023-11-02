// let a = 10
// const b = 20
// var c = 30

var c = 300
let a = 100

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("INNER: ", a);
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//     const userName = "John";

//     function two(){
//         const website = "Google";
//         console.log(userName);
//     }
//     logUserName(website);

//     two();
// }

// one();

if(true) {
    const userName = "John";
    if(userName === "John"){
        const website = " Youtube";
        console.log(userName + website);
    }
    // console.log(website);
}

// console.log(userName);

// +++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++++++
console.log(addOne(5));

function addOne(num){
    return num + 1;
}

// console.log(addTwo(5));

const addTwo = function(num){
    return num + 2;
}

