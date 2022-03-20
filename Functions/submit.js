//GET SEQUENCE NUMBER OF ACCOUNT
const xrpl = require('xrpl')

let submit = async function(client, prepared, wallet) {
    //var seed = wallet.seed
    var ts_signed = await wallet.sign(prepared)             
    var ts_result = await client.submit(ts_signed.tx_blob)

    return ts_signed.hash
}

module.exports = { submit };