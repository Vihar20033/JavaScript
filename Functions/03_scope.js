// var c = 300

// {} =>  Block Scope
// Outside  Block Scope there is Global Scope

let a = 100
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner",a);
    
}

// console.log(a)  a defined under scope not come outside
// console.log(b)  b is same
console.log(c)      // output = 30 problem