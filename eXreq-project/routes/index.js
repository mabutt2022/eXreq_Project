var express = require('express');
const passport = require('passport');
var router = express.Router();
var indexCtrl = require("../controller/form")
const Account = require('../model/account');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'eXreq' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'eXreq' });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy(function(e) {
    req.logout(()=> {
      // res.redirect("/");
      // res.redirect("https://mail.google.com/mail/u/0/?logout&hl=en")
      res.redirect("https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000")
    });
  })
  
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    failureRedirect: '/',
    // Optionally force pick account every time
    prompt: "select_account"
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    // successRedirect: '/',
    // either below rules are fine - the prompt above method and below logout method
    // failureRedirect: 'https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:3000'
    failureRedirect: '/'
  }),
  function(req, res) {
    // console.log(req.user.databaseId);
    res.redirect(`/form/${req.user.databaseId}`);
  }
)

  
 




router.post('/login', indexCtrl.authenticate)

module.exports = router;
