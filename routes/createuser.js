var express = require('express');
var router = express.Router();


/* GET createuser page. */
router.get('/', function(req, res, next) {
    res.render('createuser', { title: 'Add contact' });
});

module.exports = router;
