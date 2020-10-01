const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type
        this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    }
    encrypt(str, key) {
        return this.method(str, key, 'encrypt')
    }

    decrypt(str, key) {
        return this.method(str, key)
    }

    method(str, key, process) {
        if (!str || !key) {
            throw new Error('Please set arguments')
        }
        let keyToIndex = ''.padStart(str.length, key.toUpperCase()).split('').map(i => this.abc.indexOf(i))
        let index = 0
        let result = []
        str.toUpperCase().split('').map(i => {
            if (this.abc.includes(i)) {
                process ? i = ((this.abc.indexOf(i) + keyToIndex[index++]) % this.abc.length) :
                    i = ((this.abc.indexOf(i) - keyToIndex[index++] + this.abc.length) % this.abc.length)
                result.push(this.abc[i])
            } else result.push(i)
        })
        return this.type ? result.join('') : result.reverse().join('')
    }
}

module.exports = VigenereCipheringMachine;