const mongoose = require('mongoose');
const User = mongoose.model('User');
// require('../models/users');
const ObjectId = require('mongodb').ObjectId;



//Create new user
exports.createUser = (req,res) => {
    const user = new User(req.body);
    user
        .save()
        .then(user =>{
            res.json(user);
        })
        .catch(err => {
            throw Error(err);
        })
    console.log('new user added')

};

// Get All Users
exports.getAllUsers = async (req,res) => {
    const users = await User.find();

    if(users){
        res.status(200).json(users);
        console.log('All Contacts! From the usersController file.')

    } else {
        res.status(500).json(response.error || 'An error occurred while getting the users list.');

    }

};

// Get Users By Id
exports.getUserById = async (req,res) => {
    const userId = new ObjectId(req.params.id);
    const result = await User.find({_id: userId});

    if(result){
        res.status(200).json(result[0]);
        console.log(`One User: ${req.params.id}! From the userController file.`)
      
      }else {
        res.status(500).json(response.error || 'An error occurred while getting one user.');
      }

};

// Edit User by Id
exports.editUser = async (req,res) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    };

    const result = await User.replaceOne({_id:contactId}, contact);
    
    if(result){
        res.status(200).json(result[0]);
        console.log(`Modified User: ${req.params.id}! From the userController file.`)
      
      }else {
        res.status(500).json(response.error || 'An error occurred while modifing the user.');
      }


      console.log(contact);


};

// Delete User by Id
exports.deleteUser = async (req,res) => {
    const userId = new ObjectId(req.params.id);
    const result = await User.deleteOne({_id: userId});

    if(result){
        res.status(200).json(result[0]);
        console.log(`Deleted User: ${req.params.id}! From the userController file.`)
      
      }else {
        res.status(500).json(response.error || 'An error occurred while deleting the user.');
      }

};