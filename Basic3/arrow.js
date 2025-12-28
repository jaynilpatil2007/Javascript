const user = {
    username: "jaynil",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage();   // Jaynil, welcome to website
user.username = "Jay"
user.welcomeMessage();   // Jay, welcome to website


// Normal function:
// const chai = function () {
//     console.log(this);
// }

// chai();
// this in Normal function gives the windows object as a output


// Arrow function:
// const chai = () => {
//     console.log(this);
// }

// chai();
// this in Arrow function gives empty object as a output
