const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type
        this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    }
    encrypt(str, key) {
        return this.method(str, key, 'encrypt')
    }

    decrypt(str, key) {

        return this.method(str, key, 'decrypt')
    }

    method(str, key, variant) {
        if (!str || !key) {
            throw new Error('Please set arguments')
        }

        let result = []
        let numberStr = str.toUpperCase().split('').filter(i => this.abc.includes(i)).map(i => i = this.abc.indexOf(i))
        let cipher
        if (key.length < str.length) {
            cipher = ''.padStart(numberStr.length, key).toUpperCase();
        } else cipher = key.toUpperCase();
        let numberCipher = cipher.split('').map(i => i = this.abc.indexOf(i))



        let indexArr = [...new Set(str.split('').map((i, inx) => i.match(/\W|\d/) ? inx : ''))].splice(1)

        let symbolArr = str.match(/\W|\d/g)

        for (let i = 0; i < numberCipher.length; i++) {
            variant === 'encrypt' ?
                result[i] = this.abc[(numberStr[i] + numberCipher[i]) % this.abc.length] :
                result[i] = this.abc[(numberStr[i] - numberCipher[i] + this.abc.length) % this.abc.length]
        }
        for (let j = 0; j < indexArr.length; j++) {
            result.splice(indexArr[j], 0, symbolArr[j])
        }
        return this.type ? result.join('') : result.reverse().join('')

    }







}

module.exports = VigenereCipheringMachine;