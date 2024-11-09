require('dotenv').config()
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'task_schema'
});



const dbConn = pool.promise();
module.exports = dbConn;