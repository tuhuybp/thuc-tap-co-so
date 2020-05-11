var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: String,
    image: String,
    author: String,
    publisher: String,
    price: String,
    description: String
});

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;