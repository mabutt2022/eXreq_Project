var express = require("express");
var router = express.Router();
var itemCtrl = require('../../controller/additem');

/* GET home page. */
router.get("/additem", function (req, res, next) {
  res.render("form/item", { title: "purchase-form" });
});

router.post('/additem', itemCtrl.createItem)


module.exports = router;