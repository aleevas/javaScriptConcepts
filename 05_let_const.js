// Let
let a = 'Var a'
let b = 'Var b'

// Scope
{
    a = 'New var A'
    let b = 'Local B'
    console.log('Scope A', a) // Scope A New var A
    console.log('Scope B', b) // Scope B Local B
}

console.log('A:', a) // A: New var A
console.log('B:', b) // B: Var b


// const

const PORT = 80
// PORT = 8080 // TypeError: Assignment to constant variable

const array = ['JavaScript', 'is', 'weird']
array.push('!')
console.log(array) // [ 'JavaScript', 'is', 'weird', '!' ]
array[0] = 'JS'
console.log(array) // [ 'JS', 'is', 'weird', '!' ]
// array = '' // TypeError: Assignment to constant variable

const obj = {}
obj.name = 'Name'
obj.age = '125'
console.log(obj) // { name: 'Name', age: '125' }
obj.age = '25'
console.log(obj) // { name: 'Name', age: '25' }
delete obj.name
console.log(obj) // {  age: '25' }

// obj = '' // TypeError: Assignment to constant variable
// obj = [] // TypeError: Assignment to constant variable

