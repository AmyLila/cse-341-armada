const mongoose = require('mongoose');
require('dotenv').config();


//Connection Method
const mongoConnection = () => {

    mongoose.connect(process.env.DB_URI);
    mongoose.Promise = global.Promise;
       
};


mongoose.connection.on('open', () => {
    console.log(`MongoDB Connected!`)
});

mongoose.connection.on('error', () => {
    console.error(`Connection Error ${err.message}`)
});






module.exports = {mongoConnection};



