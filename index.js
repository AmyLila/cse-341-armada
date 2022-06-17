const express = require('express');
const { default: mongoose } = require('mongoose');
const connection = require('./data/connection');
const port = process.env.PORT || 3000;
const app = express();
const errorHandlers = require('./handlers/errorHandlers');
require('dotenv').config();

//AuthO example code
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
//end AuthO example code

connection.mongoConnection();
require('./models/users')
require('./models/armada')

app
.use(express.json())
.use('/', require('./routes'))
.use(errorHandlers.notFound);



app.listen(port, () => {
  console.log(`Running on port ${port} from the server file`)

});