const name = "Shubham"
const repoCount = 12

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repoount is ${repoCount}`);

const gameName = new String('Shubham-singh-dot-com')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Shubham  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubham.com/shubham%20singh"

console.log(url.replace('%20', '-'));
console.log(url.includes('shubham'));
console.log(gameName.split('-'));