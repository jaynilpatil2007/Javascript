if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);  // Error (a is not defined)
// console.log(b);   // Error (b is not defined)
// console.log(c);   // 30


function one() {
    const username = "Jaynil";

    function two() {
        const lastname = "Patil";
        console.log(username);
    }

    // console.log(lastname);  // Error (lastname is not defined)

    two();
}


one();

const addTwo = function (num) {
    return num + 1;
}

console.log(addTwo(5));
