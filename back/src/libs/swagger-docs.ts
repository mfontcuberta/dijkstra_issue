/* Globals */
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from 'path';

// Swagger definition
const swaggerDefinition = {
  openapi: "3.0.n",
  info: {
    title: "ShortestPath microservice",
    version: "1.0.0",
    description: "Microservice"
  },
  servers: [{ url: `${process.env.ENVIRONMENT}:${process.env.PORT}`, description: "Environment" }]
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: [ path.join( __dirname, '../components/**/*.yaml') ]
};

const swaggerUIOptions = {
  explorer: true
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

export default [
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUIOptions)
];
