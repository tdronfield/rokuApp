const creds = require("./userConfig");
const sql = require('mysql');

// Create a connection pool
// These are the same connection data that is used in a PHP connect script
// We want to obscure them a bit for security - normally these would be saved in an .env file
// and then read in at runetime / creation time
const connection = sql.createPool({
    connectionLimit: 10,
    
    user: creds.user,
    password: creds.password,
    host: creds.host,
    port: creds.port,
    database: creds.database
});

module.exports = connection;