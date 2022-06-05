const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const armadaSchema = new mongoose.Schema({
    ownerID: {
        type: mongoose.ObjectId,
        ref: 'User'
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
        type: Number,
        default: 1,
        min: 1,
        max: 12,
        required: 'Please enter the number of cannons the ship has.'
    },
    sails: {
        type: Number,
        default: 3,
        min: 1,
        max: 42, // note that the Royal CLipper has 42 sails and is the largest sailboat in the world. 
        required: 'Please enter the number of sails the ship has.'
    },
    crew: {
        type: Number,
        default: 6,
        min:1,
        max:24,
        required: 'Please enter the number of crew the ship has.'
    },
    damage: {
        type: Number,
        default:0,
        required: 'Please enter the damage ship has.'
    }

});

module.exports = mongoose.model('Armada', armadaSchema);