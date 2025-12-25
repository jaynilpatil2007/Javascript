// singleton
// Object.create

// object literals: 
const mySym = Symbol("key1");

const JsUser = {
    name: "Jaynil",
    "full name": "Jaynil Patil",
    [mySym]: "key2",  //Syntax for Symbol in object
    age: 18,
    State: "Gujarat",
    email: "abc@gmail.com",
    isLogged: false,
    lastLoginDays: ["Monday", "Friday"],
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);   //Symbol

JsUser.email = "jaynil@google.com";
// Object.freeze(JsUser);    // This function will freeze your object
JsUser.email = "jaynilpatil@google.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello JS users!");
}

JsUser.greetingTwo = function () {
    console.log(`hello JS users!, I am ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());