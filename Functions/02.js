function num (...num1){     // Resr/Spread operator take multiple argument => Store in array
    return num1;
}

const number = num(1,2,3)   // Multiple argument
// console.log(number)

// Access object using function

const detail = {
    name : 'xyz',
    no : 123
}

function handle_object(anyobject){
    console.log(`Hello ${anyobject.name} number ${anyobject.no}`)
}

handle_object(detail)