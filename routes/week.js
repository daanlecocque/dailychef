var express = require('express');
var router = express.Router();

var date =[];
var cook =[];
var numPeople=[];
var comments =[];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('week', { title: 'Express' });
});

//random
var con = require('./../connection');
function getSQL(callback) {
    var query = con.query('SELECT * FROM sql4102332.attendees, sql4102332.dinner WHERE sql4102332.attendees.date =sql4102332.dinner.date', function (err, results, fields) {
        if (err)
            throw err;
        // `results` is an array with one element for every statement in the query:
        //console.log('The query-result is: ', results[1]);
        var arr=[];

        for (var i = 0; i < results.length; i++) {
            arr[i] = results[i];
            //console.log(results[i].date);
        }
        callback(arr);
        // console.log(arr);


        // con.end();
    })
}


getSQL(function (arr) {
    console.log(arr);

    for (i = 0; i < arr.length; i++) {
        date[i] = arr[i].date;
        cook[i] = arr[i].chef;
        numPeople[i]=arr[i].userid.length;
        comments[i]=arr[i].comment;;
        }

    console.log(numPeople);


/*
    res.render('index', {
        title: 'Where is the party?',
        curDatum: datum,
        nummer4: length,
        curNaam: lnaam,
        curBijnaam: lbijnaam,
        curLocatie: locatie,
        curKudos: kudo,
    });
    newInput = [];

});
*/
});


module.exports = router;