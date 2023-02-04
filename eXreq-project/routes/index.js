var express = require('express');
const passport = require('passport');
var router = express.Router();
var indexCtrl = require("../controller/form")
const Account = require('../model/account');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'eXreq' });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy(function(e) {
    req.logout(()=> {
      res.redirect("/");
    });
  })
  
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    failureRedirect: '/'
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    // successRedirect: '/',
    failureRedirect: '/'
  }),
  function(req, res) {
    // console.log(req.user.databaseId);
    res.redirect(`/form/${req.user.databaseId}`);
  }
)

  
 


// OAuth logout route
router.get('/logout', indexCtrl.logout);

router.post('/login', indexCtrl.authenticate)

module.exports = router;
