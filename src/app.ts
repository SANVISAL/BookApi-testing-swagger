
// for testing 

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
import express, { Application } from "express";
import { globalmiddleware } from "./middleware/middleware";
import { router } from "./routes";
import { errorHandler } from "./middleware/errorHandler";
// import { errorHandler } from "./utils/errorHandler";

const app: Application = express();

// global middleware
app.use(express.json());
app.use(globalmiddleware);

app.use('/books', router);

// global error handdler
app.use(errorHandler)


export default app



