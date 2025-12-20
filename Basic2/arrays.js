// Arrays

const myArr = [1, 2, 3, 4, 5];
const myHereos = ['saktiman', 'ironman', 'spiderman'];

const myArr2 = new Array(1, 2, 4, 5, 3);
console.log(myArr[2]); //3

//  ARRAYS METHODS

myArr.push(6);  // last me '6' ko add kerega
myArr.pop(); // last element ko remove karega

myArr.unshift(9);  // front se element ko add karega
myArr.shift(); // first element remove karega 

console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(9)); // if element is not belong to the array then output is "-1"

const newArr = myArr.join(); // Convert the array into string

console.log(myArr);

// Slice and Splice

console.log("A", myArr);

const myNew1 = myArr.slice(1, 3);  // Range -> [index 1, index 3) and slice doesn't change the original array
console.log(myNew1);
console.log("B", myArr);

const myNew2 = myArr.splice(1, 3);  // splice(index starting, counting numbers) and splice changes the original array
console.log(myNew2);
console.log("C", myArr);


