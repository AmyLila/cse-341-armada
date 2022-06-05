const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.createUser = async (req,res) => {
    const user = new User(req.body);
    await user.save()
    console.log('new user added')

};