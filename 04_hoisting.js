console.log(sum(1, 2))

function sum(a, b) {
    return a + b;
}

console.log(i) // undefined
var i = 42
console.log(i) // 42

// console.log(num) // ReferenceError
// const num = 42
// console.log(num)

// console.log(num) // ReferenceError
// let num = 42
// console.log(num)

// Function Expression and Function Declaration

console.log(square(2)) // hositing works

// Function Declaration
function square(num) {
    return num ** 2
}

console.log(square(2)) // hositing don't works
// Function Expression
const square = function(num) {
    return num ** 2
}