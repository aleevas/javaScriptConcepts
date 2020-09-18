// Closures - функция замыкает в себе значения из вышестоящей области видимости
// A closure is a function having access to the parent scope, even after the parent function has closed.

function sayHelloTo(name) {
    const message = `Hello ${name}`

    return function() {
        console.log(message)
    } 

}

// const Marina = sayHelloTo('Marina')
// Marina()
// const Igor = sayHelloTo('Igor')
// Igor()

// Practice
function frameworkManager() {
    const fw = []
    return {
        list: function() {
            console.log(fw.join(' '))
        },
        add: function(item) {
            fw.push(item)
            console.log(`was ${item} added to the list`)
        }
    }
}

const manager = frameworkManager()
// manager.list()
// manager.add('React')
// manager.add('Angular')
// manager.list()
// console.log(manager)

// setTimeout()
const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {
    setTimeout(function (){
        console.log(`fib[${i}] = ${fib[i]}`)
    },
     1500)
}
// We will see
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined

// How to fix
// 1. ES6 - for (var i = 0; i < fib.length; i++) { -> for (let i = 0; i < fib.length; i++) {

// 2. Closures
for (var i = 0; i < fib.length; i++) {
    (function(j) {
        setTimeout(function (){
            console.log(`fib[${j}] = ${fib[j]}`)
        },
         1500)
    })(i)
   
}