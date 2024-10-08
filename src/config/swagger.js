const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nachsal',
      version: '1.0.0',
      description: 'A swagger for soldier nachsal ',
    },
  },
  
  apis: ['C:/Users/רובי/Desktop/Nachsal/src/router/*.js'], // Path to your API routes
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};