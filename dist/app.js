"use strict";
// for testing 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import { swaggerUi, specs } from "./swagger/swagger";
// import { createBook } from './controller/bookControllers';
// const app = express();
// const port = 3000;
// app.use(bodyParser.json());
// app.post('/books', createBook => {
// });
// // Swagger UI endpoint
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
// for CRUD operation 
// const app = require("./server")
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware/middleware");
const routes_1 = require("./routes");
const errorHandler_1 = require("./middleware/errorHandler");
// import { errorHandler } from "./utils/errorHandler";
const app = (0, express_1.default)();
// global middleware
app.use(express_1.default.json());
app.use(middleware_1.globalmiddleware);
app.use('/books', routes_1.router);
// global error handdler
app.use(errorHandler_1.errorHandler);
// app.get('/', (req, res) => {
//   // res.send('Hello, world!')
//   const message = 'Book list found !!';
//    // Sending the response with the message and books
//    res.status(200).json({ message});
// })
exports.default = app;
