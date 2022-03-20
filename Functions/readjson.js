const fs = require('fs');

let readjson = async function(path) {
    return await JSON.parse(fs.readFileSync(path));
};

module.exports = { readjson };