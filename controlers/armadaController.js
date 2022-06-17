const mongoose = require('mongoose');
const Armada = mongoose.model('Armada');
const ObjectId = require('mongodb').ObjectId;



//Create new Ship
exports.createShip = (req,res) => {
    const ship = new Armada(req.body);
    ship
        .save()
        .then(ship =>{
            res.json(ship);
        })
        .catch(err => {
            throw Error(err);
        })
    console.log('new ship added')

};

// Get All Users
exports.getAllShips = async (req,res) => {
    const ships = await Armada.find();

    if(ships){
        res.status(200).json(ships);
        console.log('All Ships! From the armadaController file.')

    } else {
        res.status(500).json(response.error || 'An error occurred while getting the armada.');

    }

};

// Get Users By Id
exports.getshipById = async (req,res) => {
    const userId = new ObjectId(req.params.id);
    const result = await Armada.find({_id: userId});

    if(result){
        res.status(200).json(result[0]);
        console.log(`One User: ${req.params.id}! From the armadaController file.`)
      
      }else {
        res.status(500).json(response.error || 'An error occurred while getting the ship.');
      }

};

// Edit ship by Id
exports.editShip = async (req,res) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
      shipName: req.body.shipName,
      shipType: req.body.shipType,
      cannons: req.body.cannons,
      sails: req.body.sails,
      crew:req.body.crew,
      damage:req.body.damage
    };

    const result = await Armada.replaceOne({_id:contactId}, contact);
    
    if(result){
        res.status(200).json(result[0]);
        console.log(`Modified Ship: ${req.params.id}! From the armadaController file.`)
      
      }else {
        res.status(500).json(response.error || 'An error occurred while modifing the ship.');
      }


      console.log(contact);


};

// Delete ship by Id
exports.deleteUser = async (req,res) => {
    const userId = new ObjectId(req.params.id);
    const result = await Armada.deleteOne({_id: userId});

    if(result){
        res.status(200).json(result[0]);
        console.log(`Deleted Ship: ${req.params.id}! From the armadaController file.`)
      
      }else {
        res.status(500).json(response.error || 'An error occurred while deleting the ship.');
      }

};