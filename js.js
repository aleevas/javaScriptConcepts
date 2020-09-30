function createIncrementor(n) {
    return function(num) {
        return num + n;
    }
}

const addOne = createIncrementor(1)
const addTwo = createIncrementor(1)


function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.{$domain}`
    }
}

const com =urlGenerator('com')
const ru = urlGenerator('ru')

// console.log(ru('vk'))
// console.log(com('google'))


function logPerson(label) {
    console.log(`${label}: ${this.name}, ${this.age}, ${this.job} `)
}

function bind(context, funName) {
    return function(...args) {
        funName.apply(context, args)
    }
}

const person1 = {name: 'Alex', age:32, job: 'Developer'}
const person2 = {name: 'Poly', age:28, job: 'SMM'}

bind(person1, logPerson)('Test')
bind(person2, logPerson)('Test2')