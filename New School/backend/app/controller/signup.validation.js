// const { check, validationResult } = require('express-validator');
const userSchema = require('../modals/user.schema');
const responseMassage = require('../../lib/response.messages');


exports.signupValidation = function (

) {
    console.log('signup1111111111 : ', req);

    [
        check('name').isLength({ min: 3 }),
        check('email').isEmail()

    ]

    const errors = validationResult(req)
    if (!errors.isEmpty()) {

        // return res.status(422).json({ errors: errors.array() })
    }
}
