import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

// Swagger definition
const swaggerDefinition = {
  info: {
    title: 'Bookstore API',
    version: '1.0.0',
    description: 'API for managing books in a bookstore',
  },
  basePath: '/api',
};

// Options for the swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ['**/*.ts'], // Path to the API files
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Swagger UI setup
const swaggerUi = swaggerUiExpress;
const specs = swaggerSpec;

export { swaggerUi, specs };