const express = require('express');
const { default: mongoose } = require('mongoose');
const connection = require('./data/connection');
const port = process.env.PORT || 3000;
const app = express();
const errorHandlers = require('./handlers/errorHandlers');


connection.mongoConnection();
require('./models/users')

app
.use(express.json())
.use('/', require('./routes'))
.use(errorHandlers.notFound);



app.listen(port, () => {
  console.log(`Running on port ${port} from the server file`)

});