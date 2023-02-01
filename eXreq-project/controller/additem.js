const Account = require('../model/account');
const Item = require('../model/procurement');

function createItem(req, res, next) {
    // console.log(req.body);
    // console.log(req.params.user);
    const account = new Item(req.body);
    account.save(function (err) {
        if (err) return console.log(err);
        res.redirect(`/form/addItem/${req.params.user}`);
    } )    
}


function index (req, res, next) {
    const id = req.params.user;
    Account.findOne({_id: id}, function(err, access) {
        res.render("item/index", { title: "add-item", user: req.params.user, admin: access.admin })     
    });    
}

function show (req, res, next) {
    const id = req.params.user;
    let result = '';
    Account.findOne({_id: id}, function(err, access) {
        Item.find({}, function(err, item) {
            console.log(item);
            res.render('item/show', {admin: access.admin, user: id, item})
        })     
    })    
}

module.exports = {
    createItem,
    index,
    show,
}