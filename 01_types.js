// primitive - null, undefined, boolean, number, string, symbol
// not primitive - object

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof undefined) // - a variable is not defined or have no value + function that not return anythig by default -> undefined
// console.log(typeof {})
// console.log(typeof Math)
// console.log(typeof Symbol('l'))
// console.log(typeof 'string') // '' "" literals -``

// Unexpected typeof behavior
// console.log(typeof null) // if to variable was store a null (adjust to null)
// console.log(typeof NaN)
// console.log(typeof (1/0))
// console.log(undefined *1)
// console.log(typeof function() {})

// Type cast
let lang = 'JavaScript'
if (lang) {
    // console.log('The weirdest language is:' , lang)
}
// Falsy values: '', 0, null, undefined, NaN, false
// console.log(Boolean(null)) // false
// console.log(Boolean('')) // false
// console.log(Boolean(' ')) // true
// console.log(Boolean('JS')) // true
// console.log(Boolean([])) // true
// console.log(Boolean({})) // true

// Strings and numbers
// console.log(1 + '2') // string 12
// console.log('' + 1 + 0) // string 10
// console.log('' + 1 + '1') // string 11
// console.log('' - 1 + 0 ) // number -1
// console.log('3' * 8) // number 24
// console.log('3' * '8') // number 24
// console.log(10 + 2 + 'px') // string 12px
// console.log('px' + 10 + 2 ) // string px102
// console.log('45' - 40) // number 5
// console.log('45px' - 40) // NaN
// console.log(null + 40) // 40
// console.log(undefined + 40) // NaN

// == vs ===
// console.log('2' == 2) // true
// console.log('2' === 2) // false
// console.log(undefined == null) // true
// console.log(undefined === null) // false
// console.log('0' == false) // true
// console.log('0' == 0) // true
// console.log(0 == 0) // true
// console.log(0 === 0) // true

// tasks with *
console.log(false == null) // false
console.log(false == '') // true
console.log(false == []) // true
console.log(false == {})// false
console.log('' == 0)// true
console.log('' == [])// true
console.log('' == {})// false
console.log(0 == []) // true
console.log(0 == {}) // false
console.log(0 == null) // false
