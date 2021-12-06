const bcrypt = require('bcrypt')


module.exports = {
    generateHash: (string) => bcrypt.hashSync(string,10)    
}