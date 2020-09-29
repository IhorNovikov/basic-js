const CustomError = require("../extensions/custom-error");

module.exports = transform = (arr) => {

    if (!Array.isArray(arr)) { throw new Error('Array is not array') }

    let result = [...arr]
    for (let i = 0; i < result.length; i++) {
        if (result[i] === '--discard-prev') {
            delete result[i] && delete result[i - 1]
        } else if (result[i] === '--discard-next') {
            delete result[i] && delete result[i + 1]
        } else if (result[i] === '--double-prev') {
            result.splice(i, 1, result[i - 1])
        } else if (result[i] === '--double-next') {
            result.splice(i, 1, result[i + 1])
        }

    }
    return result.filter(i => i != undefined);

};