function createUser(req, res, next) {
    console.log(req.body);
    res.redirect('/adduser');
}

module.exports = {
    createUser,
}