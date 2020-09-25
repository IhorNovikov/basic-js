const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],
    getLength() {
        return this.arr.length

    },
    addLink: function(value) {
        value === '' ? this.arr.push(`( )~~`) : this.arr.push(`( ${value} )~~`)
        return this
    },
    removeLink(position) {
        if (typeof(position) != 'number' || !Number.isInteger(position) || position < 0 || position >= this.arr.length + 1) {
            this.arr = []
            throw new Error('Error!')

        } else {
            this.arr.splice(position - 1, 1);
        }
        return this
    },
    reverseChain() {
        this.arr.reverse()
        return this
    },
    finishChain() {
        const finish = [...this.arr]
        this.arr = []
        return finish.join('').split(',').join('').slice(0, -2)
    }
};

module.exports = chainMaker;