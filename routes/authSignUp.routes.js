var express = require('express');
var router = express.Router();

var controller = require('../controllers/auth.controller');

router.get('/', controller.signup);

router.post('/', controller.signupCreate);

module.exports = router;