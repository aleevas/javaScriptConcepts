const { assert } = require('assert');

function sum(a) {
    a = parseInt(a) || 0
    console.log(a)
    return (n) => sum(a + n);
}

// Tests

let history = []
const old_console = console.log

describe('test sum function', () => {
    before(() => {
        console.log = (...args) => {history.push(args); old_console.apply(this, args)}
    })
    afterEach(() => {
        history = []
    })

    it("sum(1) // 1", () => {
        sum(1)
        assert.equal(history[0][0], 1)
    })
});