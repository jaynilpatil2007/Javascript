/* Primitive 
   7 types: String, Number, Boolean, null, undefined, Symbol, BigInt */

const score = 100 //Number
const scoreValue = 100.3 //Number
const isLogged = false //Boolean
const outsideTemp = null // null

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)  //false

const bigNumber = 3427898388374928n //BigInt

//Hence, there is no need to tell that the variable is what data-type. On run time it is declare, thats why Javascript is Dynamic type language.

/* Reference (Non Primitive)
   Arrays, Objects, Functions */

const heroes = ["superman", "shaktiman", "ironman"] //Arrays

let myobj = {
    name: "Jaynil",         //Objects
    age: 18,
}

const myFunction = function () {
    console.log("Hello World");       // Function
}

console.log(typeof outsideTemp)  //object
console.log(typeof bigNumber)   //bigint