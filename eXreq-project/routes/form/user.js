var express = require("express");
var router = express.Router();
var userCtrl = require('../../controller/adduser');

/* GET home page. */
router.get("/form/adduser/:user", userCtrl.index);
router.get("/form/adduser/alluser/:user", userCtrl.show);
router.get("/form/adduser/alluser/:user/deleteuser/:delete", userCtrl.deleteUser);


router.post('/adduser/:user', userCtrl.createUser)

module.exports = router;