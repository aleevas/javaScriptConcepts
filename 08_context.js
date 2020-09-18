const person = {
    surname: 'Ivanov',
    knows: function(what, name) {
        console.log(`You know ${what} ${name} ${this.surname}`)
    }
}

const ivan = {surname: 'Petrov'}

// person.knows('everything', 'Peter')
// person.knows.call(ivan, 'nothing', 'Ivan')
// person.knows.apply(ivan, ['nothing', 'Ivan'])
// person.knows.call(ivan, ...['nothing', 'Ivan'])
// person.knows.bind(ivan, 'nothing', 'Ivan')()

// +++++++++++++++++

// ES5 creating class via function determination
function Person(name, age) {
    this.name = name
    this.age = age
    console.log(this) // Person { name: 'Poly', age: 18 }
}

const Poly = new Person('Poly', 18) // Person { name: 'Poly', age: 18 }

// Binding  - explicit context
function logThis() {
    console.log(this)
}

const obj = {num: 42}
logThis.call(obj) // { num: 42 }
logThis.apply(obj) // { num: 42 }
logThis.bind(obj)() // { num: 42 }

// Implicit context
const animal = {
    legs: 4,
    logThis: function() { //using context from object what has been called
        console.log(this)
    }
}

animal.logThis() //{ legs: 4, logThis: [Function: logThis] }

// Context in arrow function
function Cat(color) {
    this.color = color
    console.log('This', this) // This Cat { color: 'red' }
    // The arrow function doesn't create an own context
    ;(() => console.log('Arrow this', this))() // Arrow this Cat { color: 'red' }

}

new Cat('red')