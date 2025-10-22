const mysql = require('mysql2');
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Nita9958",
    database: "database5",
});

module.exports=pool.promise();