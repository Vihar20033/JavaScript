const ID = 12202040501062 //Not Changeable 
var city = "Anand"
let field = "Computer"
name = "Vihar"

city = "Vidhyanagr"
feild = "Cp"

// id = 2 not allowed

/*
Prefer not to use var
because it cause issue i function scope and block scope

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers
*/

console.table([city,field,name,ID])
