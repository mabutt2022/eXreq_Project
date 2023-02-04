const Account = require("../model/account");
const User = require("../model/user");

function createUser(req, res, next) {
  // console.log(req.body);
  // console.log(req.params.user);
  const account = new Account(req.body);
  account.save(function (err) {
    if (err) return console.log(err);
    res.redirect(`/form/adduser/${req.params.user}`);
  });
}

function index(req, res, next) {
  const id = req.params.user;
  Account.findOne({ _id: id }, function (err, access) {
    res.render("user/index", {
      title: "add-item",
      user: req.params.user,
      admin: access.admin,
    });
  });
}

function show(req, res, next) {
  const id = req.params.user;
  let result = "";
  Account.findOne({ _id: id }, function (err, access) {
    Account.find({}, function (err, account) {
      res.render("user/show", { admin: access.admin, user: id, account });
    });
  });
}

function deleteUser(req, res, next) {
  var role = "";
  Account.deleteOne({ _id: req.params.delete }, function (err) {
    User.deleteOne({ databaseId: req.params.delete }, function (err) {
      Account.find({}, function (err, account) {
        account.forEach((el) => {
          if (String(el._id) === req.params.user) {
            role = el.admin;
          }
        });
        res.render("user/show", {
          admin: role,
          user: req.params.user,
          account,
        });
      });
    });
  });
}

module.exports = {
  createUser,
  index,
  show,
  deleteUser,
};
