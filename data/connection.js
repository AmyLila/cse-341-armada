const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
require('dotenv').config();

let _client;
let _collection;


//Connection Method
const mongoConnection = () => {

    MongoClient.connect(process.env.DB_URI, (err, client) => {
        if (err) throw err;
        _client = client
        _collection = client.db('project2').collection('users');
        console.log('Connected! from the connection file');

    });
       
};

//Get the collection
const getCollection = () => {
    if  (_collection) {
        return _collection;
    }
    throw 'No database found.'

};




module.exports = {mongoConnection, getCollection};



