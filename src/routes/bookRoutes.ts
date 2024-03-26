
import express, { Router, Request,Response,NextFunction} from 'express';
import { BookController } from '../controller/bookControllers';
import { validationmongoID } from "../middleware/validationmongoID";
import { bookSchema } from '../schema/schema';
import { validateSchemaMiddleware } from '../middleware/validationInput';

const router: Router = express.Router(); // Create an instance of Router

const bookController: BookController = new BookController(); // Explicitly specify the type

router.post("/", validateSchemaMiddleware(bookSchema), async (req:Request, res:Response, next: NextFunction) => {
    try {
        const createdBook = await bookController.createBook(req.body); // Assuming req.body contains the book data
        res.status(201).json(createdBook); // Respond with the created book
    } catch (error) {
        next(error); // Pass any errors to the error handling middleware
    }
});

export { router };