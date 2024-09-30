const swaggerDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.1',
  info: {
    title: 'Lending Referral Program API',
    version: '1.0.0',
    description: 'Lending Referral Program API Docs',
  },
  host: `localhost:${process.env.PORT}`,
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: [__dirname + '/../router/*.js', __dirname + '/../swagger/*.js'],
};

const swaggerSpec = swaggerDoc(options);

module.exports = swaggerSpec;
