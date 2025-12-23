const marvel_heroes = ['spiderman', 'ironman', 'thor'];
const dc_heroes = ['flash', 'superman', 'batman'];

marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

//Imp
const realArray = another_array.flat(Infinity);
console.log(realArray);



console.log(Array.isArray("Jaynil"));  //false
console.log(Array.from("Jaynil"));  //"from" converts string into array

console.log(Array.from({ name: "Jaynil" }));  //give an empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //convert variables into array
