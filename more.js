const coding = ['js', 'cpp', 'java', 'py'];

// const newCoding = coding.forEach((item) => {      // forEach does not return the value (hence we use filter, map, reduce, etc..)
//     // console.log(item);
//     return item;
// })

// console.log(newCoding);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
const newNums = myNums.filter((num) => {
    return num > 4;
})
console.log(newNums);