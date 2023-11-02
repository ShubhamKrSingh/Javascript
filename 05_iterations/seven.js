const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNumbers = myNumbers.map( (num) => {
//     return num + 10
// })

let newNumbers = myNumbers
    .map( (num) => {
        return num + 10
})
    .map( (num) => {
        return num * 10
})
    .filter( (num) => {
        return num > 140
})

console.log(newNumbers);