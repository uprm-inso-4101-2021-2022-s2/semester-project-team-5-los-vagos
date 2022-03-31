// Since this connects to jsu the db, rename file to:
// db.js
const Pool = require('pg').Pool
const pool = new Pool(
    {
        user:"",
        password:"",
        database:"",
        host:"",
        port:1234 // Change this, should be an int!
    }
)

module.exports = pool;