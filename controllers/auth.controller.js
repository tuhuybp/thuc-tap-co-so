var User = require('../models/user.model')

module.exports.index = (req, res) => {
    res.render('auth/signin')
};

module.exports.signin = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    // var user = User.findOne({ email: email }, (err, user) => {
    //     if (err) throw err
    //     //console.log(user)

    // });
    //console.log(user.obj);
    var user = { email: 'abc@abc.com', password: 'abc'}
    if (user.email !== email) {
        res.render('auth/signin', {
            errors: ['User does not exit !'],
            values: req.body
        });
        return;
    }

    if (user.password !== password) {
        res.render('auth/signin', {
            errors: ['Wrong password'],
            values: req.body
        })
        return;
    }
    res.redirect('/products');
};

module.exports.signup = (req, res) => {
    res.render('auth/signup')
};

module.exports.signupCreate = (req, res) => {
    //console.log(req.body);

    // lay thong tin ng dung nhap vao
    var user = req.body;

    // them key admin vao obj 
    user["admin"] = false;
    //console.log(user);

    //them moi user
    user = new User(user);
    // Lưu phần tử vừa thêm mới lại, thông qua việc truyền vào một hàm callback
    user.save((err) => {
        if (err) throw err;
    });

    res.redirect('/products');
};
