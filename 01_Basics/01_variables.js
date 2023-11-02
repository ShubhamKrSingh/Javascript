// Second Lecture

let accountId = 1;
var acccountEmail = "shubham.kr3112@gmail.com"
const accountPassword = 121212;
accountCity = "Patna"
let accountState;

accountId = 2;
acccountEmail = "new@gmail.com"
// accountPassword = 12; // Not Allowed in const
accountCity = "Mohali"

/* 
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, acccountEmail, accountPassword, accountCity, accountState]);