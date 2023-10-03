// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2: "b"};
const obj2 = { 3: "a",4:"b"};

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign(obj1,obj2);
// const obj3 = Object.assign({},obj1,obj2);//{}behave like a source
// console.log(obj3);
const obj3 = {...obj1,...obj2};// concatination using spread operator
// console.log(obj3); 
//another way to play with objects in js when data comes from a database it comes as array ob objects
const users = [
    {
        id:1,
        email:"hello.com"
    },
    {
        id:1,
        email:"hello.com"
    },
    {
        id:1,
        email:"hello.com"
    },
    {
        id:1,
        email:"hello.com"
    },
    {
        id:1,
        email:"hello.com"
    }
]
// console.log(users[1].email);
 // some other usefull methods of js objects
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = { 
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"vishal"
}
course.courseInstructor;// it is a overhead process to write this type of long line of code instead ae can do "object destructuring"

const {courseInstructor: instructor} = course;
//now we can use 
console.log(instructor);// will be evaluate same as course.courseInstructor;

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } this is json and this is what we get from an api
[
    {},
    {},
    {}
]// sometimes we can get this type of response of api