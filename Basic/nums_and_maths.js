const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //100.00 //The parameter we give it says that the output is decimal answer

const otherNumber = 23.7964;
console.log(otherNumber.toPrecision(2));  //24 //the parameter we give in bracket it is number of digits before decimal we have to precise and it converts the number into string

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 


// ++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math) // object
console.log(Math.abs(-4)); //4 //absolute value
console.log(Math.round(4.6)); //5 //round of the values
console.log(Math.ceil(4.2)); //5 //thoda bhi jyada hoga to next number print kardega 
console.log(Math.floor(4.9)); //4 //cahe kitna bhi point ho but vohi number print karega 
console.log(Math.min(3, 6, 1, 4, 5)); //1 
console.log(Math.max(3, 6, 1, 4, 5)); //6 


console.log(Math.random()); //range -> (0,1)
console.log(Math.floor(Math.random() * 10) + 1); //range -> (1, 10)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //range -> (min, max)
