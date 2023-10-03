// var c = 300
// let a = 300
// if (true) {
//    let a = 10
//     const b = 20
//     console.log("INNER: ", a);
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two();

}
one();
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
  }
    // console.log(website); //error
}

// console.log(username);//error


// // ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num)  // this is function declaration hoisted top of the program
{
    return num + 1
}



addTwo(5)
const addTwo = function(num)// this is function expression so it is not hoisted at the begining of the program
{
    return num + 2
}