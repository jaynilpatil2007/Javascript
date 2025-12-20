// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());  // date in non-local form
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());  // date  
console.log(myDate.toLocaleString());    // date and time 

console.log(typeof myDate);  // Object

let myCreatDate = new Date(2023, 0, 23, 5, 4); // Date(year, month, date, hour, min, sec), in Date() month start with with 0 i.e. 0 -> Jan, 1 -> Feb, etc.
console.log(myCreatDate.toLocaleString()); // 23/1/2023, 5:04:00 am

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatDate.getTime());
// console.log(Math.floor(Date.now() / 1000));
