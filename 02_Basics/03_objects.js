// Objects Literals

const sym = Symbol("Keys")

const JsUser = {
    name : "Vihar", 
    "Fullname": " SDF",
    // sym : "Key 1",           Give String Datatype but it is symbol      
    [sym] : "Key 1",       
    email : "abc@gmail.com",
    age : 20,
    isLoggedIn : false,
    lastlogin : ["Monday","Tuesday"]
}

// // Access
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Fullname"]);
// console.log(JsUser[sym])

JsUser.email = "xyz@gamil.com"
// console.log(JsUser.email);

// Object.freeze(JsUser)       // Freeze the values 

JsUser.email = "@gamil.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello");
}
console.log(JsUser.greeting);   // Output:[Function (anonymous)]
console.log(JsUser.greeting()); //Hello    undefined

JsUser.greetingtwo = function(){
    console.log(`HEllo,${this.name}`);
}

console.log(JsUser.greetingtwo);   
console.log(JsUser.greetingtwo());