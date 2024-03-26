"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specs = exports.swaggerUi = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
// Swagger UI setup
const swaggerUi = swagger_ui_express_1.default;
exports.swaggerUi = swaggerUi;
const specs = swaggerSpec;
exports.specs = specs;
