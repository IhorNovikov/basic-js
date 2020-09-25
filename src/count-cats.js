const CustomError = require("../extensions/custom-error");

module.exports = countCats = (matrix) =>
[].concat(...matrix).filter(i => i == '^^').length
