var Product = require('../models/product.model')
var cloudinary = require('cloudinary');

module.exports.index = (req, res) => {
    // page là trang hiện tại
    // var page = req.query.page || 1;
    // begin là trang bắt đầu, 8 là số items trong 1 trang
    // var begin = (page - 1) * 8;
    // //end là trang kết thúc bằng end - 1
    // var end = 8 * page
    // res.render('products/products', {
    //      products: db.get('products').value().slice(begin, end)
    // });
    Product.find((err, products) => {
        if (err) throw err;

        res.render('products/products', {
            products: products
        })
    })
};

module.exports.view = (req, res) => {
    var id = req.params.id;
    Product.findById(id, (err, book) => {
        if (err) throw err;

        //console.log(book);
        res.render('products/view', {
            product: book
        })
    })
}

module.exports.create = (req, res) => {
    res.render('products/create')
}
module.exports.postCreate = (req, res) => {
    var auth = {
        cloud_name: 'dkci2sg7x',
        api_key: '737194723621671',
        api_secret: 'g8KqRYHaVaJ1FdkLim7tn0ph_0c'
    };
    var book = req.body

    cloudinary.uploader.upload('req.body.image', auth)
};

module.exports.admin = (req, res) => {
    Product.find((err, products) => {
        if (err) throw err;

        res.render('products/admin', {
            products: products
        })
    })
}
module.exports.adminSearch = (req, res) => {
    var q = req.query.q;
    Product.find((err, products) => {
        if (err) throw err

        // tìm sách có trong database
        var matchedProduct = products.filter((product) => {
            return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
        })

        res.render('products/admin', {
            products: matchedProduct
        })
    });
};

module.exports.productsSearch = (req, res) => {
    var q = req.query.q;
    Product.find((err, products) => {
        if (err) throw err

        // tìm sách có trong database
        var matchedProduct = products.filter((product) => {
            return product.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
        })

        res.render('products/products', {
            products: matchedProduct
        })
    });
};
module.exports.update = (req, res) => {
    res.render('products/update');
};
module.exports.delete = (req, res) => {
    res.render('products/delete');
};