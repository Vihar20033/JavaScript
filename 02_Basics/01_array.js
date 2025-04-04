const array = [1,2,3,4,5]
const array_2 = new Array(1,2,3,4,5)

// console.log(array_2);

array.push(6)
array.pop()
array.unshift(9)
array.shift()
// console.log(array)

const newarr = array.join()
// console.log(newarr)             // String

// Slice and Splice

console.log("A original ",array);
const n = array.slice(1,3)             //1-3 means element of index 1,2
console.log(n)                         
console.log("B after slice ",array);  // Origial array remain same


const y = array.splice(1,3)            //1-3 means index 1,2,3
console.log(y)
console.log("B after splice ",array);  // passing index get remove from original
