// Needs to create a function that display results to the console like these:
// sum(1)
// 1
// sum(1)(2)(3)
// 1
// 3
// 6
// etc.

// 1. Closures
function sum(num) {
    let result = num
    function f(s) {
        result += s
        console.log(result)
        return f
    }
    console.log(result)
    return f
}
sum(1)
sum(1)(2)(3)