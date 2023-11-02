// for in loop
const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'shift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "pyhon", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')

for (const key in map) {
    console.log(key);
}