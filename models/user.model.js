var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    admin: Boolean 
});

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;