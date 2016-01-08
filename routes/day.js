var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/day', function(req, res, next) {
    res.render('day', { title: 'Express' });
});

module.exports = router;

//random