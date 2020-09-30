const items = [
    { name: 'Name 1', price: 50 },
    { name: 'Name 2', price: 150 },
    { name: 'Name 3', price: 100 },
    { name: 'Name 4', price: 250 },
    { name: 'Name 5', price: 500 },
    { name: 'Name 6', price: 50 },
]

const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.group('filter')
console.log(filteredItems)
console.groupEnd()