
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }
// sayMyName();

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers(4,8);
// function addTwoNumbers(number1, number2){

/// let result = number1 + number2
 // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUsermsg(username = "sam"){// default parameter{
    if(username === undefined){
        console.log("please enter a username");
        return;
    }
    return ` ${username} just logged in`;
}
// console.log(loginUsermsg());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// ... is called spread operator and rest operator but use case is diffrent
// console.log(calculateCartPrice(200, 400, 500, 2000));//num 1 will be printed the last two parameter
console.log(typeof num1);
const user = {
    username:"hitesh",
    price: 199
}
//how to pass an object in a function

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

handleObject(
    {
        username:"sam",
        price: 399
    }
)
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[3];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));