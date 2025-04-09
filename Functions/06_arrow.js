// Difference between normal and arrow function

// function normalFunc() {
//     console.log(this);
// }
// normalFunc(); // In browser: `window`, in Node.js: global object

// const obj = {
//     name: "Vihar",
//     sayHi: function () {
//         console.log(this.name);
//     }
// };
// obj.sayHi(); // "Vihar"


// const arrowFunc = () => {
//     console.log(this);
// };
// arrowFunc(); // Same `this` as the surrounding scope (e.g., window or global)

// const obj2 = {
//     name: "Vihar",
//     sayHi: () => {
//         console.log(this.name);
//     }
// };
// obj2.sayHi(); // undefined (because `this` is not `obj`)




const box = {
    name: "Vihar",
    sayMyName: function () {
      console.log(this.name);
    }
  };
  
  box.sayMyName(); // Output: Vihar ✅

  
//   Now What Happens If You Add a Function Inside?

const box2 = {
    name: "Vihar",
    sayMyName: function () {
      function inner() {
        console.log(this.name);
      }
      inner();
    }
  };
  
  box2.sayMyName(); // Output: undefined ❌

//   Because inner() is a normal function, and this inside it refers to the global object, not box.

// Now Use Arrow Function:

const box3 = {
    name: "Vihar",
    sayMyName: function () {
      const inner = () => {
        console.log(this.name);
      };
      inner();
    }
  };
  
  box3.sayMyName(); // Output: Vihar ✅

// Because arrow functions don’t create their own this.
// So this in inner() is the same as this in sayMyName(), which is box.


const add = (num1,num2) => {        // Explicitly declare {} we have to return
    return num1 + num2
}
let y = add(1,2)
console.log(y)

const add2 = (num1 , num2) => (num1 + num2)   // Inplicitly
let z = add2(1,3)
console.log(z)


