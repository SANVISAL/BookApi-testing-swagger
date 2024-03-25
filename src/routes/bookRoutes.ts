
import express, { Router } from 'express';
import * as bookController from "../controller/bookControllers"
import {validationmongoID} from "../middleware/validationmongoID"
import { bookSchema } from '../schema/schema';
import { validateSchemaMiddleware } from '../middleware/validationInput';

const router: Router = express.Router(); // Create an instance of Router

router.post('/', validateSchemaMiddleware(bookSchema),bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:bookId',validationmongoID, bookController.getBookById)
  
router.delete('/:id',bookController.DeleteBook);


// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

export {router};