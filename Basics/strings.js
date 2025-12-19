const name = "Jaynil"
const age = 18

// console.log(name + age + " value");

console.log(`My name is ${name} and my age is ${age}`);

const gameName = new String('Jaynil-Patil');
console.log(gameName[0]);  //J
console.log(gameName.__proto__);  // {}

console.log(gameName.length);  //12
console.log(gameName.toUpperCase());  //JAYNIL-PATIL
console.log(gameName.toLowerCase());  //jaynil-patil
console.log(gameName.charAt(3));  //n
console.log(gameName.indexOf('n'));  //3

const newString = gameName.substring(0, 4);  //Give the output from index 0 to index 3 
console.log(newString);  //Jayn

const anotherString = gameName.slice(-11, 4);  // minus indicates from end of the array
console.log(anotherString); //ayn

const newString1 = "  Jaynil   "
console.log(newString1); //   Jaynil   
console.log(newString1.trim()); //Jaynil  //remove the extra white-spaces

const url = "https://jaynil.com/jaynil%20patil"
console.log(url.replace('%20', '-'));  //https:/jaynil.com//jaynil-patil

console.log(url.includes('jaynil')); //true
console.log(url.includes('kenil')); //false

console.log(gameName.split("-")); //split helps to convert a string into array, it will split the string into array from seperator("-") 

