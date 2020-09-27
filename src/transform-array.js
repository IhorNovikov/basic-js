const CustomError = require("../extensions/custom-error");

module.exports = transform = (arr) => {

    let res = [...arr]
    if (Array.isArray(arr)) {
        if (res[res.length - 1] == '--double-next' || res[res.length - 1] == '--discard-next') {
            res.splice(-1, 1)
        }
        if (res[0] == '--double-prev' || res[0] == '--discard-prev') {
            res.splice(0, 1)
        }
        for (let i = 0; i < res.length; i++) {
            if (res[i] === '--discard-prev') {
                res.splice(i - 1, 2)

            } else if (res[i] === '--double-prev') {
                res.splice(i, 1, res[i - 1])

            } else if (res[i] === '--double-next') {
                res.splice(i, 1, res[i + 1])


            } else if (res[i] === '--discard-next') {
                res.splice(i, 2)

            }

        }

    } else throw new Error('Array is not array')

    return res.filter(i => i != '--double-prev' && i != '--discard-prev' && i != '--double-next' && i != '--discard-prev')
}