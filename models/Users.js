const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: 'Please enter your first name.'
    },
    lastName: {
        type: String,
        trim: true,
        required: 'Please enter your last name.'
    },
    email: {
        type: String,
        trim: true,
        required: 'Please enter your email.'
    },
    password: {
        type: String,
        trim: true,
        required: 'Please enter your password.'
    }

});

module.exports = mongoose.model('User', userSchema);
