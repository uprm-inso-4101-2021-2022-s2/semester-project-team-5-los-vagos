/* 
 Tjis files handles the database connection.
*/
const Pool = require('pg').Pool
const pool = new Pool(
    {
        user:"pxsltagyzgkvxf",
        password:"f466706278926543a892f02b991f73c517695b080d72252fbcc5dd06ef6f65a2",
        database:"d9t61p7tcdh613",
        host:"ec2-52-20-194-52.compute-1.amazonaws.com",
        port:5432 
    }
)

module.exports = pool;