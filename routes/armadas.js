const routes = require('express').Router();
const bodyParser = require('body-parser');
const armadaController = require('../controlers/armadaController');
routes.use(bodyParser.json());



//get all contacs
routes.get('/', armadaController.getAllShips);

//Get contact by ID
routes.get('/:id', armadaController.getshipById);

//POST route to create a new user
routes.post('/', armadaController.createShip);

//Code to modify an existing contact by id
routes.put('/:id', armadaController.editShip);

//Delete contact by id
routes.delete('/:id', armadaController.deleteUser);


module.exports = routes  