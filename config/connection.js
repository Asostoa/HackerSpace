// Set up MySQL connection.
const mysql = require("mysql");
let connection;
//Setting up my connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "hackerspace_db",
  });
}
// Making connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
