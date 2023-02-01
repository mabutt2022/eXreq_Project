const Account = require('../model/account');
const Form = require('../model/forms');
const Version = require('../model/version');
const Item = require('../model/procurement');
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
        Item.find({}, function(err, item) {
            res.render("form/index", { title: "submission-form", user: req.params.user, admin: access.admin, item });
        })
              
    });    
}

function createForm(req, res, next) {    
    // const newForm = new Form(req.body);
    req.body.item = req.body.item.split(',');
    console.log(req.body);
    const form = new Form(req.body);
    form.save(function(err){
        if (err) console.log(err);
        res.redirect(`/form/${req.params.user}/`);
    })    
}

function addLine(req, res, next) {
    console.log(req.body);
    console.log(req.params.user);

    res.redirect(`/form/${req.params.user}/`)
}

module.exports = {
    authenticate,
    createForm,
    index,
    addLine,
}