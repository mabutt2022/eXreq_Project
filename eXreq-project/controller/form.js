const Account = require("../model/account");
const Form = require("../model/forms");
const Version = require("../model/version");
const Item = require("../model/procurement");
const forms = require("../model/forms");
const passport = require("passport");

function authenticate(req, res, next) {
  // console.log(req.body);
  Account.findOne({ email: req.body.email }, function (err, account) {
    if (
      req.body.email === account.email &&
      req.body.password === account.password
    ) {
      res.redirect(`/form/${account._id}`);
    } else {
      res.redirect("/");
    }
  });
}

function index(req, res, next) {
  const id = req.params.user;
  console.log(req.params.user);
  console.log(typeof req.params.user);
  Account.findOne({ _id: id }, function (err, access) {
    Item.find({}, function (err, item) {
      res.render("form/index", {
        title: "submission-form",
        user: req.params.user,
        admin: access.admin,
        name: access.name,
        item,
      });
    });
  });
}

function show(req, res, next) {
  const id = req.params.user;
  Account.findOne({ _id: id }, function (err, access) {
    Form.find({ userId: id }, function (err, forms) {
      res.render("form/show", {
        title: "submission-form",
        forms,
        user: req.params.user,
        admin: access.admin,
      });
    });
  });
}

function view(req, res, next) {
  const id = req.params.user;
  const formId = req.params.view;
  Account.findOne({ _id: id }, function (err, access) {
    Form.findOne({ _id: formId }, function (err, forms) {
      Form.findById(formId)
        .populate("item")
        .exec(function (err, item) {
          res.render("form/view", {
            title: "submission-form",
            forms,
            user: req.params.user,
            admin: access.admin,
            item,
          });
        });
    });
  });
}

function version(req, res, next) {
  // console.log(req.body);
  const id = req.params.user;
  const formId = req.params.view;
  let verObjId;

  if (req.body.version === "Current") {    
    res.redirect(`/form/${id}/submittedForm/${formId}`);
    console.log('hello')
  } else {
    req.body.version = parseInt(req.body.version);
    Account.findOne({ _id: id }, function (err, access) {
      Form.findOne({ _id: formId }, function (err, forms) {
        Form.findById(formId)
          .populate("version")
          .exec(function (err, ver) {
            ver.version.forEach((el) => {
              // console.log(el.versionNum);
              if (el.versionNum === req.body.version) {
                // console.log('done')
                verObjId = el._id;
              }
              if (verObjId) return;
            });
            Version.findOne({ _id: verObjId }, function (err, verForm) {
              console.log(verObjId);
              console.log(verForm);
              Version.findById(verObjId)
                .populate("item")
                .exec(function (err, item) {
                  res.render("form/versions", {
                    title: "submission-form",
                    forms,
                    user: req.params.user,
                    admin: access.admin,
                    item,
                    verForm,
                  });
                });
            });
          });
      });
    });
  }
}

function createForm(req, res, next) {
  // const newForm = new Form(req.body);
  req.body.item = req.body.item.split(",");
  // console.log(req.body);
  const form = new Form(req.body);
  form.save(function (err, savedform) {
    if (err) console.log(err);
    console.log(savedform);
    res.redirect(`/form/${req.params.user}/`);
  });
}

function addLine(req, res, next) {
  // console.log(req.body);
  // console.log(req.params.user);
  res.redirect(`/form/${req.params.user}/`);
}

function deleteForm(req, res, next) {
  Account.findOne({ _id: req.params.user }, function (err, account) {
    Form.deleteOne(
      { userId: req.params.user, _id: req.params.form },
      function (err) {
        Form.find({ userId: req.params.user }, function (err, forms) {
          res.render("form/show", {
            admin: account.admin,
            user: account._id,
            forms,
          });
        });
      }
    );
  });
}

function update(req, res, next) {
  const id = req.params.user;
  const formId = req.params.updateform;
  Account.findOne({ _id: id }, function (err, access) {
    Form.findOne({ _id: formId }, function (err, forms) {
      Item.find({}, function (err, itemList) {
        Form.findById(formId)
          .populate("item")
          .exec(function (err, item) {
            res.render("form/update", {
              title: "submission-form",
              forms,
              user: req.params.user,
              admin: access.admin,
              item,
              itemList,
            });
          });
      });
    });
  });
}

function updateForm(req, res, next) {
  // console.log(req.body);
  req.body.item = req.body.item.split(",");
  Account.findOne({ _id: req.params.user }, function (err, access) {
    Form.findOne(
      { userId: req.params.user, _id: req.params.formId },
      function (err, formFound) {
        if (!formFound.version.length) {
          var nextVersion = 1;
        } else {
          var nextVersion = formFound.version.length + 1;
        }
        tempFound = formFound.toJSON();
        delete tempFound._id;
        tempFound.versionNum = nextVersion;
        var verForm = new Version(tempFound);
        verForm.save(function (err, verFormed) {
          formFound.version.push(verFormed._id);
          formFound.save();
          Form.findOneAndUpdate(
            { userId: req.params.user, _id: req.params.formId },
            req.body,
            function (err, formOne) {
              Form.find({ userId: req.params.user }, function (err, forms) {
                res.render("form/show", {
                  title: "submission-form",
                  forms,
                  user: req.params.user,
                  admin: access.admin,
                });
              });
            }
          );
        });
      }
    );
  });
}

module.exports = {
  authenticate,
  createForm,
  index,
  addLine,
  show,
  view,
  deleteForm,
  update,
  updateForm,
  version,
};
