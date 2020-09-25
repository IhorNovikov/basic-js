const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = dateSample = (sampleActivity) => {
    let activity = parseFloat(sampleActivity)
    if ((typeof sampleActivity !== 'string') || (sampleActivity === '') || (!sampleActivity)) { return false }
    return (activity > 0 && activity < MODERN_ACTIVITY) ?
        Math.ceil(Math.log((MODERN_ACTIVITY / activity)) / (0.693 / HALF_LIFE_PERIOD)) : false
}