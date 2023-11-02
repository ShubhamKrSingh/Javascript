const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
//   return accumulator + currentValue
// }, 0)

const myTotal = myNums.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue
} , 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JavaScript",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        name: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
} , 0)

console.log(priceToPay);