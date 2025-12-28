const coding = ['js', 'ruby', 'java', 'puthon', 'cpp'];

// normal function:
// coding.forEach(function (item) {
//     console.log(item);
// })

// arrow function
// coding.forEach((val) => {
//     console.log(val);
// })

//other technic
// function nameMe(val) {
//     console.log(val);
// }

// coding.forEach(nameMe);

// coding.forEach((val, index, array) => {
//     console.log(val, index, array)
// })

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js',
    },
    {
        languageName: 'java',
        languageFileName: 'java',
    },
    {
        languageName: 'python',
        languageFileName: 'py',
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})