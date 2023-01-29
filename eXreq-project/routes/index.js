var express = require('express');
var router = express.Router();
var indexCtrl = require("../controller/form")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'eXreq' });
});

router.post('/login', indexCtrl.authenticate_temp)

module.exports = router;
