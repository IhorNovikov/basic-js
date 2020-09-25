const CustomError = require("../extensions/custom-error");

module.exports = getSeason = (date) => {
  if(!date) return 'Unable to determine the time of year!';
  if((Object.prototype.toString.apply(date) != '[object Date]')) throw new Error('Error');
  let month = date.getMonth();
  let arr = [ 'winter', 'winter', 'spring', 
              'spring', 'spring', 'summer', 
              'summer','summer', 'autumn', 
              'autumn', 'autumn', 'winter' ]
  return arr[month]

};
