// Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

// for of:
for (const [key, value] of map) {
    console.log(key, ":-", value);
}

// for in:
for (const key in map) {
    console.log(key);     // map is not for iteration
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
// console.log(key, ':-', value);      // myObject is not iterable
// }

// From Objects:
const trackLanguage = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}


for (const key in trackLanguage) {
    console.log(`${key} shortcut is for ${trackLanguage[key]}`);
}

// From Arrays
const programing = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programing) {
    console.log(programing[key]);
}