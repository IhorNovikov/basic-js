const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth = arr =>
    arr.every(i => !Array.isArray(i)) ? 1 : this.calculateDepth(arr.flat()) + 1 
};