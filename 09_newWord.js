// ES5
function Cat(color, name) {
    this.color = color
    this.name = name
}

const cat = new Cat('white', 'Barsik')
console.log(cat) // Cat { color: 'white', name: 'Barsik' }

function myNew(constructor, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}

const cat = myNew(Cat, 'red', 'Barsink2') // use custom 'new word'
console.log(cat) // Cat { color: 'red', name: 'Barsink2' }