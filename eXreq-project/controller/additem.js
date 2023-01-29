function createItem(req, res, next) {
    console.log(req.body);
    res.redirect('/additem');
}

module.exports = {
    createItem,
}