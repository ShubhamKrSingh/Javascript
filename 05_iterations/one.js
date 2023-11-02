// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

// console.log(element);

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop values: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner loop values: ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }   
// }

// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// break , continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected five`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected five`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}