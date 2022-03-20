const fs = require('fs');

let savecsv = function(path, object) {
    fs.appendFile(path, (object), function(err) {});
};

module.exports = { savecsv };