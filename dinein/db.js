/* 
 This files handles the database connection.
*/
require("dotenv").config(); // Bringing dotenv vars to this scope.

const {Pool} = require('pg');
const URI = "postgres://pxsltagyzgkvxf:f466706278926543a892f02b991f73c517695b080d72252fbcc5dd06ef6f65a2@ec2-52-20-194-52.compute-1.amazonaws.com:5432/d9t61p7tcdh613"
const pool = new Pool({
    connectionString: URI,
    ssl: true // needs to be true 
});
module.exports = {pool};