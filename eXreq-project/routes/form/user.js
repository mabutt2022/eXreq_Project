var express = require("express");
var router = express.Router();
var userCtrl = require('../../controller/adduser');

/* GET home page. */
router.get("/adduser", function (req, res, next) {
  res.render("form/user", { title: "user-form" });
});

router.post('/adduser', userCtrl.createUser)

module.exports = router;