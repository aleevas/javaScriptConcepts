const first = () => console.log('First')
const second = () => console.log('Second')
const third = () => console.log('Third')

first()
setTimeout(second, 0)
third()

//Result - 
// First
// Third
// Second