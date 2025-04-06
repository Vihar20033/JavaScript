/*
 Singleton Object = A singleton is an object that is created only once and reused throughout the application. There is only one instance of it.
                    When you want a single point of access, like configuration, logger, or a shared state.

*/

const Singleton = {
    name: "I am the only one",
    sayName: function () {
      console.log(this.name);
    }
  };
  
  Singleton.sayName(); // Output: I am the only one
  
/*
Non-singleton objects = A non-singleton object is one where each time you create it,new instance is made. Each instance can have its own state.
                        When you want independent objects with their own data, like multiple users, products, etc.
*/

function Person(name) {
    this.name = name;
    this.sayName = function () {
      console.log(this.name);
    };
  }
  
  const person1 = new Person("Alice");
  const person2 = new Person("Bob");
  
  person1.sayName(); // Output: Alice
  person2.sayName(); // Output: Bob
  

  const u = {
    email : "s",
    fullname : {
      username:{
      fname : 'VV',
      mname : 'acv'
      }
    }

  }

  console.log(Object.values(u));

console.log(u.fullname)
console.log(u.fullname.username)
console.log(u.fullname.username.fname)

const o1 = {1:'a',2:'b'}
const o2 = {3:'c',4:'d'}

// const o3 = {o1,o2}
const o3 = Object.assign({},o1,o2)  // {} => target remaining source
console.log(o3);
















