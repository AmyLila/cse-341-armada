const routes = require('express').Router();
const bodyParser = require('body-parser');
const userController = require('../controlers/userController');
routes.use(bodyParser.json());



//get all contacs
routes.get('/', userController.getAllUsers);

//Get contact by ID
routes.get('/:id', userController.getUserById);

//POST route to create a new user
routes.post('/', userController.createUser);

//Code to modify an existing contact by id
routes.put('/:id', userController.editUser);

//Delete contact by id
routes.delete('/:id', userController.deleteUser);


module.exports = routes  