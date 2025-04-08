function one (){
    const uname = "Vihar"
    function two(){                     // Chota bade se le sakta hai 
        const fname = "Chudasama"
        //  console.log(fname)
        //  console.log(uname)
    }
    two()                               // Bada chote se nai le sakta
    // console.log(fname)               
    console.log(uname)
}
one()

// Two types of function declaration

const x = addone(5)             // Can declare first
function addone (num){
    return num + 1
}

console.log(x)


const y = addtwo(5)                     // Not Declare first
const addtwo = function(num){
    return num + 1
}

console.log(y)