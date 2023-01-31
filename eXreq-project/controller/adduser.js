const Account = require("../model/account");

function createUser(req, res, next) {
    console.log(req.body);
    console.log(req.params.user);
    const account = new Account(req.body);
    account.save(function (err) {
        if (err) return console.log(err);
        res.redirect(`/form/adduser/${req.params.user}`);
    } )    
}

function index (req, res, next) {
    const id = req.params.user;
    Account.findOne({_id: id}, function(err, access) {
        if (access.admin === 'Y') {
            res.render("form/user", { title: "add-item", user: req.params.user, admin: 'Y' })
        } else {
            res.render("form/user", { title: "add-item", user: req.params.user, admin: 'N' });
        }       
    });    
}

module.exports = {
    createUser,
    index,
}