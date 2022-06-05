const mongoose = require('mongoose');
require('../models/users')
const User = mongoose.model('User');


exports.createUser = async (req,res) => {
    const user = new User(req.body);
    await user.save()//need something here to make it stop waiting
    console.log('new user added')

};