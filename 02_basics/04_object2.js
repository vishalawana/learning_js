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
console.log(obj3); 
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
console.log(users[1].email);
// some other usefull methods of js objects
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
