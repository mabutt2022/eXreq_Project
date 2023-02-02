const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../model/user');
const Account = require('../model/account');

passport.use(
  new GoogleStrategy(
    // Configuration object
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
      
    //   store: true
    },
    // The verify callback function
    (accessToken, refreshToken, profile, cb) => {
      // 1 with the id that comes from google.
      // 2 we will use that to find the user in the database.
      User.findOne({ googleId: profile.id })
        .then((user) => {
          // IF the user exists, continue with that user in the cookie

          if (user) {
            return cb(null, user);
          }
          // ELSE we need to create the user, and then continue with that usr in the cookie

          Account.findOne({email:profile.emails[0].value}, function (err, account) {
            console.log(account);
            User.create({
                name: profile.displayName,
                databaseId: account._id,
                googleId: profile.id,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value,
              }).then((newUser) => cb(null, newUser))
              .catch((err) => cb(err));
          })
          })           
    }
  )
);

// This is called when we serialize the user
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});
// This is called when we deserialize the user
passport.deserializeUser((userId, cb) => {
  User.findById(userId)
    .then((currentUser) => {
      cb(null, currentUser);
    })
    .catch((err) => cb(err));
});