var mysql = require("mysql");
// Create connection with db
var con = mysql.createConnection({
    host: 'sql4.freesqldatabase.com',
    user: 'sql4102332',
    password: '5itRXDkz15',
    database: 'sql4102332',
    dateStrings: 'date',
});

con.connect(function (err) {
    if (err) {
        throw(err)
        return;
    }
    console.log('Connection established');
    console.log('connected as id ' + con.threadId);
});

module.exports = con;