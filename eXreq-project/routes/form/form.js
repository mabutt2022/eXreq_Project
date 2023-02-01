var express = require("express");
var router = express.Router();
var formCtrl = require('../../controller/form');

/* GET home page. */
router.get("/form/:user/", formCtrl.index);
router.get("/form/:user/submittedForm", formCtrl.show);
router.get("/form/:user/submittedForm/:view", formCtrl.view);

router.get('/form/:user/deleteform/:form', formCtrl.deleteForm);

router.post('/form/:user/', formCtrl.createForm);
router.post('/form/:user/data', formCtrl.addLine);



module.exports = router;