const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type) {
        this.type = type
    }
    encrypt(str, key) {
        if (!str || !key) {
            throw new Error('Please set arguments')
        }
        if ((!this.type) || (this.type === true)) {
            return str.toUpperCase()
        }
    }
    decrypt(str, key) {
        if (!str || !key) {
            throw new Error('Please set arguments')
        }
        if (this.type === false) {
            return str.toUpperCase()
        }
    }
}

module.exports = VigenereCipheringMachine;