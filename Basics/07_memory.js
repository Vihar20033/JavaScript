// All primitive datatypes are stored in stack memory
// All Non Primitive datatypes are stored in heap memory


// Stack memory pass copy of a variable hence changing copy will not change the original 
let name = "Vihar"
let fname = name
fname = "Chudasama"
console.log(fname)
console.log(name)


// Value stored in heap memory and second time declaring variable it use it as a refrences and hence value change
let user1 = {
    email: "user1@gamil.com"
}
let user2 = user1
user2.email = "vihar@gmail.com"
console.log(user1)
console.log(user2)


