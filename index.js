var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cloudinary = require('cloudinary');
var bodyParser = require('body-parser');

var port = 3000;

mongoose.connect('mongodb://admin:admin1234@ds221003.mlab.com:21003/heroku_k1rr7lmv');

var productRoute = require('./routes/product.routes');
var userRoute = require('./routes/user.routes');
var authRoute = require('./routes/auth.routes');
var authSignUpRoute = require('./routes/authSignUp.routes');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
   // res.render('products/products');
   res.render('index')
});

app.use('/products', productRoute);
app.use('/signin', authRoute);
app.use('/signup', authSignUpRoute);
app.use('/user', userRoute)

app.listen(port, () => {
    console.log(`Dich vu dang thuc thi tai port ${port}`);
})
