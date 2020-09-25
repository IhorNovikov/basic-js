const CustomError = require("../extensions/custom-error");

module.exports = createDreamTeam = (members) => 
!Array.isArray(members) ? false : members.filter(i => typeof (i) === 'string')
 .map(i => {
   for (let j = 0; j < i.length; j++) {
     if (i[j] !== ' ') return i[j].toUpperCase()
   }
 }).sort().join('')
