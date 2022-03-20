
let round = function(number, dp) {

    return Number(number).toFixed(dp).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')
}
module.exports = { round };
