// const tinderUser = new Object();  //Singleton Object
const tinderUser = {}   // Non-singleton Object

tinderUser.id = "Jay23"
tinderUser.name = "Jaynil"
tinderUser.toLogged = false

// console.log(tinderUser);

const regularUser = {
    email: "Jay@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Jaynil",
            lastName: "Patil",
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {obj1, obj2}; //wrong method
// const obj3 = Object.assign({}, obj1, obj2);   //Object.assign(target, source, source,....)

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);


//From database

const users = [
    {
        id: 1,
        email: "jay@google.com",
    },
    {
        id: 1,
        email: "jay@google.com",
    },
    {
        id: 1,
        email: "jay@google.com",
    },
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser));    // output is form of array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    courseName: "JEE prep",
    price: "999",
    courseInstructor: "Jaynil",
}

// course.courseInstructor

const { courseInstructor: Instructor } = course

console.log(Instructor);

// JSON format

// {
//     "name": "Jaynil"
//     "coursename": "JEE"
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

