const CustomError = require("../extensions/custom-error");

module.exports = repeater = (str, options) => {
    let string = String(str)
    let addition
    options['addition'] === undefined ? addition = '' : addition = String(options['addition']);
    let repeatTimes = options.repeatTimes || 1
    let separator = options['separator'] || '+'
    let additionRepeatTimes = options.additionRepeatTimes || 1
    let additionSeparator = options['additionSeparator'] || '|'
    let addAddSeparator = (`${addition}${additionSeparator}`.repeat(additionRepeatTimes - 1) + addition)
    return `${string}${addAddSeparator}${separator}`.repeat(repeatTimes - 1) + `${string}${addAddSeparator}`

}