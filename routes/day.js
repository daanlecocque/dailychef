var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('day', { title: 'Express' });
});




module.exports = router;

//random
var con = require('./../connection');
function getSQL(callback) {
    var query = con.query('SELECT * FROM sql4102332.attendees, sql4102332.users WHERE sql4102332.attendees.userid =sql4102332.users.userid', function (err, results, fields) {
        if (err)
            throw err;
        // `results` is an array with one element for every statement in the query:
        //console.log('The query-result is: ', results[1]);
        var arr=[];

        for (var i = 0; i < results.length; i++) {
            arr[i] = results[i];
            console.log(results[i]);
        }
        callback(arr);
        // console.log(arr);


        // con.end();
    })
}


getSQL(function (arr) {

});