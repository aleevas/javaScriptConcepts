// let a = 42
// let b = a
// b++
// console.log('a', a) // 42
// console.log('b', b) // 43

let a = [1, 2, 3]
let b = a // reference to a
b.push(4)

console.log('a', a) // [1,2,3,4]
console.log('b', b) // [1,2,3,4]
console.log(a === b) // true

let a1 = [1, 2, 3]
let b1 = a1.concat() // return the copy of array
b1.push(4)

console.log('a', a1) // [1,2,3]
console.log('b', b1) // [1,2,3,4]

let c = [1, 2, 3, 4]
console.log(a1 === b1) // false
console.log(a1 === c) // false - because it's different objects
