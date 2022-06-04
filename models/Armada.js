const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const armadaSchema = new mongoose.Schema({
    ownerID: {
        type: String,
        trim: true,
        required: 'Please enter your first name.'
    },
    shipName: {
        type: String,
        trim: true,
        required: 'Please enter a ship name.'
    },
    shipType: {
        type: String,
        trim: true,
        required: 'Please enter a ship type.'
    },
    connons: {
        type: Int32,
        required: 'Please enter the number of cannons the ship has.'
    },
    sails: {
        type: Int32,
        required: 'Please enter the number of sails the ship has.'
    },
    crew: {
        type: Int32,
        required: 'Please enter the number of crew the ship has.'
    },
    damage: {
        type: Int32,
        required: 'Please enter the damage ship has.'
    }

});

module.exports = mongoose.model('Armada', armadaSchema);