const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type
    }
    encrypt(str, key) {
        if (!str || !key) {
            throw new Error('Please set arguments')
        }

        let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let result = []
        let numberStr = str.toLowerCase().replace(/\W|\d|/g, '').split('').map(i => i = abc.indexOf(i))
        let cipher = ''.padStart(numberStr.length, key).toLowerCase();
        let numberCipher = cipher.split('').map(i => i = abc.indexOf(i))

        let indexArr = [...new Set(str.split('').map((i, inx) => i.match(/\W|\d/) ? inx : ''))].splice(1)

        let symbolArr = str.match(/\W|\d/g)

        for (let i = 0; i < numberCipher.length; i++) {

            result[i] = abc[(numberStr[i] + numberCipher[i]) % abc.length].toUpperCase()
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

        let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let result = []
        let numberStr = str.toLowerCase().replace(/\W|\d/g, '').split('').map(i => i = abc.indexOf(i))
        let cipher = ''.padStart(numberStr.length, key);
        let numberCipher = cipher.split('').map(i => i = abc.indexOf(i))



        let indexArr = [...new Set(str.split('').map((i, inx) => i.match(/\W|\d/) ? inx : ''))].splice(1)

        let symbolArr = str.match(/\W|\d/g)

        for (let i = 0; i < numberCipher.length; i++) {

            result[i] = abc[(numberStr[i] - numberCipher[i] + abc.length) % abc.length].toUpperCase()
        }


        for (let j = 0; j < indexArr.length; j++) {
            result.splice(indexArr[j], 0, symbolArr[j])
        }
        return this.type ? result.join('') : result.reverse().join('')

    }
}

module.exports = VigenereCipheringMachine;