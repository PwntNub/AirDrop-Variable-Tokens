//GET SEQUENCE NUMBER OF ACCOUNT
const xrpl = require('xrpl')

let checktxid = async function(client, txid) {
    const hashJSON = await client.request({
        "id": 1,
        "command": "tx",
        "transaction": txid,
        "binary": false
    })

    let unix_timestamp = hashJSON.result.date + 946684800
    var date = new Date(unix_timestamp * 1000);
    let result = hashJSON.result.meta.TransactionResult

    return result
}

module.exports = { checktxid };