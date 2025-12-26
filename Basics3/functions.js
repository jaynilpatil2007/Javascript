function addNumbers(number1, number2) {
    console.log(number1 + number2);
}

addNumbers();  //NaN
addNumbers(2, 4);  // 6
addNumbers(2, "4");  // 24
addNumbers(2, null);  // 2 (because null -> 0)

const result = addNumbers(3, 5);

console.log(result); // undefined (because function doesn't return value)

function loginUserMessage(userName) {
    if (userName === undefined) {
        console.log("Please Enter the Username!");
        return
    }
    return `${userName} just logged in`
}

const res = loginUserMessage("Jaynil");
console.log(res);


function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 700))  // output is given in array -> [200, 400, 700]

const user = {
    username: "Jaynil",
    price: 299,
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}/- Rs`);
}

handleObject(user);

handleObject({
    username: "Diddy",
    price: "free",
})

const myNewArray = [200, 400, 700]

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));