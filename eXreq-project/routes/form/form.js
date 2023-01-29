var express = require("express");
var router = express.Router();
var formCtrl = require('../../controller/form');

/* GET home page. */
router.get("/form", function (req, res, next) {
  res.render("form/index", { title: "submission-form" });
});

router.post('/form/:id', formCtrl.createForm)


module.exports = router;