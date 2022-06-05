const routes = require('express').Router();
const connection = require('../data/connection');
const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');
const {userValidation, results} = require('../validation');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const userController = require('../controlers/userController');
routes.use(bodyParser.json());



// code to get all contacs
routes.get('/', (req, res) => {

    const resultsAll = connection.getCollection().find();
    resultsAll.toArray().then((documents) => {
      if(resultsAll){
        res.status(200).json(documents);
        console.log('All Contacts! From the users file.')

      }else {
        res.status(500).json(response.error || 'An error occurred while getting the users list.');
      }
        

    });
    

}); //end get all contacts


//Get contact by ID
routes.get('/:id', (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const resultsOne = connection.getCollection().find({_id: contactId});
    resultsOne.toArray().then((documents) => {
      if(resultsOne){
        res.status(200).json(documents[0]);
        console.log(`One Contact: ${req.params.id}! From the contacts file.`)
      
      }else {
        res.status(500).json(response.error || 'An error occurred while getting one user.');
      }
        


    });
    

}); //End get contacts by ID



//POST route to create a new user
routes.post('/', userController.createUser);

//End create new user


//Code to modify an existing contact by id
routes.put('/:id', userValidation, (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  };

  const result = results(req);
    if(!result.isEmpty()){
      return res.status(400).json({errors: result.array()});
    }
    
    connection.getCollection().replaceOne({_id: contactId}, contact)
    .then((documents) => {
      res.status(202).json(documents);
    

  });
  
  console.log(contact);
 
});//end modify contact


//Delete contact by id
routes.delete('/:id', (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = connection.getCollection().deleteOne({_id:contactId});
  result.then((documents) => {
    if(result){
      res.status(202).json(documents);

    }else {
        res.status(500).json(response.error || 'An error occurred while modifying the user.');
      }
    

  });
  console.log(result);
  


});

module.exports = routes  