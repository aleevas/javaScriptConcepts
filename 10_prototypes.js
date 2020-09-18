// ES5 Object.getPrototypeOf()

function Cat(color, name) {
    this.color = color
    this.name = name
}

Cat.prototype.voice = function() {
    console.log(`Cat ${this.name} say meow`)
}

const cat = new Cat('Balbes', 'pink')
cat.voice()

console.log(Cat.prototype) // Cat { voice: [Function] }


// ES6 __proto__ - a link to prototype of parent class or parent object (prototypal inheritance)

console.log(cat.__proto__) // Cat { voice: [Function] }

// 

function Person() {}

Person.prototype.legs = 2
Person.prototype.skin = 'yes'

const person = new Person()
person.name = 'Vladik'
console.log('skin' in person) // true -> check if object has this property
console.log(person.name) // 'Vladik'
console.log(person.age) // undefined

console.log(person.hasOwnProperty('name')) // true
console.log(person.hasOwnProperty('skin')) // false -> because this property in prototype and not in object itself


// Object.create()
let proto = {year: 2020}
const newYear = Object.create(proto)

console.log(newYear.year) // 2020
console.log(newYear.hasOwnProperty('year')) // false -> because this property in prototype and not in object itself
console.log(newYear.__proto__ === proto) // true

proto.year = 2021
console.log(newYear.year) // 2021

proto = 9999
console.log(newYear.year) // 2021