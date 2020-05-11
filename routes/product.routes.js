var express = require('express');
var router = express.Router();

var controller = require('../controllers/product.controller');

router.get('/', controller.index);
router.get('/view/:id', controller.view);
router.get('/admin', controller.admin);
router.get('/admin/create', controller.create);
router.post('/admin/create', controller.postCreate);
router.get('/search', controller.productsSearch);
router.get('/admin/search', controller.adminSearch);
router.get('/admin/update', controller.update);
router.get('/admin/delete', controller.delete);


module.exports = router;