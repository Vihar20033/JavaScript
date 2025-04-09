// this keyword use for current context

const user = {
    username : "V",
    price : 999,

    welcome : function(){
        console.log(`${this.username},welcome`)         // this is required 
        console.log("inside ",this)
    }
}

user.welcome()
user.username = " S"        // Context change from V to S
user.welcome()

console.log("this outside a function ",this)        //in node environment it is empty but in browser it has global windows object and many other things


// Inside function this has many things 
function x (){
    console.log("THis inside a function",this)
}
x()

// Access values using this inside fucntion
function y (){
    let a = "Vihar"
    console.log("THis inside a function",this.a)        // undefined
}
y()

// Conclusion
// this can be acccessible only within object not in function
