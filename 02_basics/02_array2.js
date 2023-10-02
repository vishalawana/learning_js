const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);//adds array into array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // to access the inner array

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// another imp method of concatination:-"spreading"

const all_new_heros = [...marvel_heros,...dc_heros];
// console.log(all_new_heros);

//NOTE:- const behave diffrently in case of array and object becoz of these are the refrence datatype 
//        so we can modify an array or object but we cannot redeclare them.

// const array2 = [1,2,3,4,[5,6,7],8,[9,2,[8,0]]];
//  const real_array2 = array2.flat(Infinity);// flattern the whole complex array like  array 2
//  console.log(real_array2);

 console.log(Array.from("vishal awana"));