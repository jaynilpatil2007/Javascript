const coding = ['js', 'cpp', 'java', 'py'];

// const newCoding = coding.forEach((item) => {      // forEach does not return the value (hence we use filter, map, reduce, etc..)
//     // console.log(item);
//     return item;
// })

// console.log(newCoding);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// const newNums = myNums.filter((num) => {
//     return num > 4;
// })
// console.log(newNums);

const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
})

console.log(newNums);

const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2007
    },
    {
        title: 'Book Three', genre: 'History', publish: 1999, edition: 2014
    },
    {
        title: 'Book Four', genre: 'Non-Fiction', publish: 2009, edition: 2012
    },
    {
        title: 'Book Five', genre: 'Science', publish: 1987, edition: 2008
    },
    {
        title: 'Book Six', genre: 'Fiction', publish: 1985, edition: 2003
    },
    {
        title: 'Book Seven', genre: 'History', publish: 1991, edition: 2010
    },
    {
        title: 'Book Eight', genre: 'Science', publish: 2004, edition: 2011
    },
    {
        title: 'Book Nine', genre: 'Non-Fiction', publish: 1985, edition: 2009
    },
    {
        title: 'Book Ten', genre: 'Fiction', publish: 1996, edition: 2007
    },
];

// const userBooks = books.filter((book) => book.genre === 'History')
// console.log(userBooks)


// const userBooks = books.filter((book) => { return book.publish >= 2000});
// console.log(userBooks)



