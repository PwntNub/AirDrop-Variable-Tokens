//GET SEQUENCE NUMBER OF ACCOUNT
const xrpl = require('xrpl')

let accountsequence = async function(client, address) {
var account_info = await client.request({
    "command": "account_info",
    "ledger_index": "validated",
    "account": address
})

var current_sequence = account_info.result.account_data.Sequence
return current_sequence
}

module.exports = { accountsequence };