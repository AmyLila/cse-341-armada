const { check, validationResult } = require('express-validator');
 
exports.userValidation = [
    check('firstName', 'First Name is requied').not().isEmpty(),
    check('lastName', 'Last Name is requied').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true })
];
 
exports.results = validationResult;