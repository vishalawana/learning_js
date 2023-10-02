
let myDate = new Date();
// console.log(myDate.toString()); //longest output of date  with universal time
// console.log(myDate.toDateString()); //provides date in string format with day
// console.log(myDate.toLocaleString());// provides date in mm/dd/yyyy and local time also
// console.log(typeof myDate);// object



let myCreateDate = new Date(2023,0,23);//there can be more arguments here
// console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);


// console.log(myCreateDate.getTime()); default output is in milli sec
// console.log(Math.floor(Date.now()/1000)); // converts in sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//get current month
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})
//we can use this method very usefully and extensivly

