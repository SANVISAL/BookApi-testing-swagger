
import { Request,Response,NextFunction } from "express";
import { Book } from "../models";
import { ResponseError } from "../utils/responeError";
import { BookService } from "../service/service";

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     description: Add a new book to the bookstore.
 *     parameters:
 *       - in: body
 *         name: book
 *         description: Book object that needs to be added to the bookstore
 *         required: true
 *         schema:
 *           $ref: "#/definitions/Book"
 *     responses:
 *       201:
 *         description: Book created successfully
 *         schema:
 *           $ref: "#/definitions/Book"
 *       500:
 *         description: Internal server error
 */

 export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('helo', req.body)
    const savedBook = await BookService.createBook(req.body);

    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await BookService.getAllBook();
    const message = "Book list found !!";
    res.status(200).json({message,books});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// get book by id 

export const getBookById = async (req: Request, res: Response, next: NextFunction) => {
  const bookId = req.params.bookId;

  try {
      // Query the database to find the book by its ID
      const book = await Book.findById(bookId);
      if (!book) {
          
        throw new ResponseError(404, "Book not found");
      }
      // If the book is found, respond with the book data
      res.status(200).json(book);
      
  } catch (error) {
      next(error);
  }
};


// /// delete  book

export const DeleteBook = async (req: Request, res: Response, next: NextFunction)=>{
  try{
   
     const  deleteBook = await BookService.deleteById(req.params.id);
     if(!deleteBook){
      // return  res.status(404).json({message:"Book not found"})
      throw new Error("Delete Book not found")
     } 
     res.status(200).json({message:"Book Delete successfully"})
  }catch (error){
    // res.status(500).json({error: error.message})
    next (error)

  }
};

// // update book 
// export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const updateBook = await BookService.UpdateBook(req.params.id, req.body);
//     if (!updateBook) {
//       // If the book is not found, throw an error
//       throw new Error("Update Book not found");
//     }
//     return res.status(200).json(updateBook);
//   } catch (error) {
//     next(error); // Pass the error to the error handling middleware
//   }
// };

// // Implement other CRUD operations (getBookById, updateBook, deleteBook) here...