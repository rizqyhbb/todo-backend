const bcrypt = require('bcrypt')


module.exports = {
    generateHash: (string) => bcrypt.hashSync(string,10),
    
    compareHash: (string, hashed) => bcrypt.compareSync(string,hashed)
}