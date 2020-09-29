const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type
        this.abc ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    }
    encrypt(str, key) {
        if (!str || !key) {
            throw new Error('Please set arguments')
        }

        let result = []
        let numberStr = str.toUpperCase().replace(/\W|\d|/g, '').split('').map(i => i = this.abc.indexOf(i))
        let cipher = ''.padStart(numberStr.length, key).toUpperCase();
        let numberCipher = cipher.split('').map(i => i = this.abc.indexOf(i))

        let indexArr = [...new Set(str.split('').map((i, inx) => i.match(/\W|\d/) ? inx : ''))].splice(1)

        let symbolArr = str.match(/\W|\d/g)

        for (let i = 0; i < numberCipher.length; i++) {

            result[i] = this.abc[(numberStr[i] + numberCipher[i]) % this.abc.length]
        }


        for (let j = 0; j < indexArr.length; j++) {
            result.splice(indexArr[j], 0, symbolArr[j])
        }

        return this.type ? result.join('') : result.reverse().join('')

    }

    decrypt(str, key) {
        if (!str || !key) {
            throw new Error('Please set arguments')
        }

        let result = []
        let numberStr = str.toUpperCase().replace(/\W|\d/g, '').split('').map(i => i = this.abc.indexOf(i))
        let cipher = ''.padStart(numberStr.length, key).toUpperCase();
        let numberCipher = cipher.split('').map(i => i = this.abc.indexOf(i))



        let indexArr = [...new Set(str.split('').map((i, inx) => i.match(/\W|\d/) ? inx : ''))].splice(1)

        let symbolArr = str.match(/\W|\d/g)

        for (let i = 0; i < numberCipher.length; i++) {

            result[i] = this.abc[(numberStr[i] - numberCipher[i] + this.abc.length) % this.abc.length]
        }


        for (let j = 0; j < indexArr.length; j++) {
            result.splice(indexArr[j], 0, symbolArr[j])
        }
        return this.type ? result.join('') : result.reverse().join('')

    }
}

module.exports = VigenereCipheringMachine;