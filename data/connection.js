const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoose = require('mongoose');
require('dotenv').config();
// require('../models/Armada')
require(`../models/users`)


let _client;
let _collection;



//Connection Method
const mongoConnection = () => {

    mongoose.connect(process.env.DB_URI);
    mongoose.Promise = global.Promise;


// MongoClient.connect(process.env.DB_URI, (err, client) => {
//         
//         _client = client
//         _collection = client.db('project2').collection('users');
        

//     });
       
};


mongoose.connection.on('open', () => {
    console.log(`MongoDB Connected!`)
});

mongoose.connection.on('error', () => {
    console.error(`Connection Error ${err.message}`)
});

//Get the collection
const getCollection = () => {
    if  (_collection) {
        return _collection;
    }
    throw 'No database found the get collection function is broken.'

};




module.exports = {mongoConnection, getCollection};



