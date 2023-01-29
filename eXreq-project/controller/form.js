function authenticate_temp (req, res, next) {
    console.log(req.body);
    let credential = {username: 'abuzarbt@gmail.com', password: 'admin'};
    if (req.body.username === credential.username &&
        req.body.password === credential.password) {
        res.redirect('/form');
    } else {
        res.redirect('/');
    }    
}

function createForm(req, res, next) {
    console.log(req.body);
    res.redirect('/form');
}

module.exports = {
    authenticate_temp,
    createForm,
}