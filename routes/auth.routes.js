var express = require('express');
var router = express.Router();

var controller = require('../controllers/auth.controller');

router.get('/', controller.index);

router.post('/', controller.signin);

module.exports = router;