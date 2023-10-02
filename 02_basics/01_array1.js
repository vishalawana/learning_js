// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// Array methods
// myArr.push(6) - Adds the element 6 to the end of the array.
// myArr.push(7) - Adds the element 7 to the end of the array.
// myArr.pop()   - Removes and *returns the last element from the array.y

// myArr.unshift(9) - Adds the element 9 to the beginning of the array.add the value at the begining of array and (shift all the values one index ahead **tiemoverhead)
// myArr.shift()    - Removes and *returns the first element from the array.

// console.log(myArr.includes(9));  - Checks if the array includes the element 9 and returns true or false.
// console.log(myArr.indexOf(3));   - Returns the index of the first occurrence of the element 3 in the array or -1 if not found.

// const newArr = myArr.join()      - Converts the array elements to a string, separated by commas.

//slice,splice

console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)// exclude index 3 in operation and do not manipulates orignal array

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3) //icludes index 3 in operation and manipulates the origenal array and partetioned or remove the  3 elements started from index 1
// console.log("C ", myArr);
// console.log(myn2)
// myArr.splice(2, 2, 6, 7) - Removes 2 elements starting from index 2 and inserts elements 6 and 7 at that position.