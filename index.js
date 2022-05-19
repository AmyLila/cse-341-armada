const express = require('express');
const connection = require('./data/connection');


const port = process.env.PORT || 3000;
const app = express();

connection.mongoConnection();

app
.use(express.json())
.use('/', require('./routes'));



app.listen(port, () => {
  console.log(`Running on port ${port} from the server file`)

});