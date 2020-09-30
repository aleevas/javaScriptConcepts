const items = [
    { name: 'Book', price: 150 },
    { name: 'Table', price: 150 },
    { name: 'Whisky', price: 100 },
    { name: 'Stand Lamp', price: 250 },
    { name: 'Bike', price: 500 },
    { name: 'Book', price: 50 },
]

// filter
const filteredItems = items.filter((item) => {
    return item.price <= 150 && item.name == 'Book'
})

console.group('filter')
console.log(filteredItems) // [ { name: 'Book', price: 150 }, { name: 'Book', price: 50 } ]
console.groupEnd()

// map
const mapedItems = items.map((item) => {
    return item.name
})

console.group('map')
console.log(mapedItems) // [ 'Book', 'Table', 'Whisky', 'Stand Lamp', 'Bike', 'Book' ]
console.groupEnd()

// find
const findItems = items.find((item) => {
    return item.name == 'Book' // return first item that respond to condition
})

console.group('find')
console.log(findItems) // { name: 'Book', price: 150 }
console.groupEnd()

// foreEach
console.group('foreEach')
const res = []
items.forEach((item) => {
    if (item.name == 'Book') {
        res.push(item)
    }
    // console.log(item.name)
})
console.log(res) // [ { name: 'Book', price: 150 }, { name: 'Book', price: 50 } ]
console.groupEnd()

// some
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100 // return true if we have at least one suttisfied condition
})

const hasUltraInexpensiveItems = items.some((item) => {
    return item.price <= 10
})

console.group('some')
console.log(hasInexpensiveItems) // true
console.log(hasUltraInexpensiveItems) // false
console.groupEnd()

// every
const hasEveryInexpensiveItems = items.every((item) => {
    return item.price <= 100 // return true if we have every single item that suttisfied condition
})

const hasEveryUltraInexpensiveItems = items.every((item) => {
    return item.price <= 1000
})

console.group('every')
console.log(hasEveryInexpensiveItems) // false
console.log(hasEveryUltraInexpensiveItems) // true
console.groupEnd()

// reduce
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.group('reduce')
console.log(total) // 1200
console.groupEnd()

// includes

const includesItems = [1, 2, 3, 4, 5]
const includeTwo = includesItems.includes(2) // true
const includeFifty = includesItems.includes(50) // false

console.group('includes')
console.log(includeTwo) // false
console.log(includeFifty) // false
console.groupEnd()
