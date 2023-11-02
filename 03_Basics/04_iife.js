// Immeditely Invoked Function Expressions (IIFE)

// function dbConnection(){
//     console.log(`DB CONNECTED`);
// }

// dbConnection()

(function dbConnection(){
    // named IFFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Shubham');

// (function chaiAurCode() {
//     console.log(`DB CONNECTED TWO`);
// })()