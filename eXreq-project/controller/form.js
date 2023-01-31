const Account = require('../model/account');

function authenticate (req, res, next) {
    console.log(req.body);
    Account.findOne({email: req.body.email}, function(err, account) {
        if (req.body.email === account.email &&
        req.body.password === account.password) {
            res.redirect(`/form/${account._id}`);
    } else {
        res.redirect('/');
    }  
    });      
}

function index (req, res, next) {
    const id = req.params.user;
    Account.findOne({_id: id}, function(err, access) {
        if (access.admin === 'Y') {
            res.render("form/index", { title: "submission-form", user: req.params.user, admin: 'Y' })
        } else {
            res.render("form/index", { title: "submission-form", user: req.params.user, admin: 'N' });
        }       
    });    
}

function createForm(req, res, next) {
    console.log(req.body);
    res.redirect(`/form/${req.params.user}/`);
}

module.exports = {
    authenticate,
    createForm,
    index,
}