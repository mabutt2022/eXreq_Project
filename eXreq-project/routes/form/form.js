var express = require("express");
var router = express.Router();
var formCtrl = require('../../controller/form');

/* GET home page. */
router.get("/form/:user/", formCtrl.index);

router.post('/form/:user/', formCtrl.createForm)


module.exports = router;