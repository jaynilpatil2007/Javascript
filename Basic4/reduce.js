const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);

console.log(myTotal);


const shoppiingCart = [
    {
        itemName: 'js Course',
        price: 2999,
    },
    {
        itemName: 'py Course',
        price: 1999,
    },
    {
        itemName: 'mobile dev Course',
        price: 5999,
    },
    {
        itemName: 'DSA Course',
        price: 12999,
    },
];

const totalPrice = shoppiingCart.reduce((acc, item) => item.price + acc, 0);

console.log(totalPrice);
