const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Armada API',
    description: 'Armada API',
  },

  host: 'localhost:3000',
  schemes: ['http'],

  // host: 'amy-baker-armada.herokuapp.com',
  // schemes: ['https'],

  
};

const outputFile = '.swagger-output.json';
const endpointsFiles = ['./routes/index.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);