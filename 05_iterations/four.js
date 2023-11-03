// learns that how to iterate objects in js
const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb: "ruby",
    swift: "swift by apple"
}
// we will use for in loop here.
for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming = ["js","cpp","swift","rb"];
 for(const key in programming){
    // console.log(programming[key]);
 }
 const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map){
    console.log(key);
 } //for in loop is not working here becoz map is not iterable
 //note:- for iterating objects for of loop is being used most of the times , we cannot use for in loop for objects
