const express = require('express');
const router = express.Router();

const access = require('../app/controller/signup');
const valid = require('../app/controller/signup.validation')

router.post('/signup', valid.signupValidation, access.signup);

module.exports = router;
