var mysql = require("mysql");
// Create connection with db
var con = mysql.createConnection({
    host: 'camelotexcalibur.nl',
    user: 'camelot_kok',
    password: 'koketen1',
    database: 'camelot_kok',
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