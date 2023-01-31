const Account = require('../model/account');

function createItem(req, res, next) {
    console.log(req.body);
    res.redirect(`/form/additem/${req.params.user}`);
}

function index (req, res, next) {
    const id = req.params.user;
    console.log(id);
    Account.findOne({_id: id}, function(err, access) {
        if (access.admin === 'Y') {
            res.render("form/item", { title: "add-item", user: req.params.user, admin: 'Y' })
        } else {
            res.render("form/item", { title: "add-item", user: req.params.user, admin: 'N' });
        }       
    });    
}

module.exports = {
    createItem,
    index,
}