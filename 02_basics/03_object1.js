//singleton object created using constructor

//objcet literals 
const mySym = Symbol("key1");// understanding the working with symbol as a key in object

const jsUser = {
    name:"hitesh",  // behind the scense key is also stored like a string ex:- "name"
    "full name":"awana", // it can only be access using [] notation
    [mySym]:"myKey1", // this is the only way to declare symbol as symbol in js objects otherwise mySym will evaluate as any simple datatypes,

    age:18,
    location: "jaipur",
    email: "hitesh@MediaList.com",
    isLoggedin: false,
    lastLoginDays:["monday","sunday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]);

jsUser.emai = "change.email.com";
// Object.freeze(jsUser);// freezes the object , now changes can not be done of object properties
jsUser[mySym] = "hello"; // do not reflect in jsUser
// console.log(jsUser); 

//functions in object

jsUser.greeting = function(){
    console.log(`hello js user ${this.name}`);
}
 
console.log(jsUser.greeting());

// when we access the key in js object we use . notation but if theser is not possibility of using it we shoukd use [] notation