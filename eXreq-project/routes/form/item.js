var express = require("express");
var router = express.Router();
var itemCtrl = require('../../controller/additem');

/* GET home page. */
router.get("/form/additem/:user", itemCtrl.index);

router.post('/additem/:user', itemCtrl.createItem)


module.exports = router;