import { Controller, Get, Route, Tags, Post, Body, Path, Delete, Response, SuccessResponse } from "tsoa";// import { Book } from '../models';
import { Book ,BookModel} from '../models/book';

import { BookService } from '../service/service';
import { NextFunction } from "express";

@Route('books')
@Tags("Books")
export class BookController {

  // private bookService: BookService;

    @Post()
    @SuccessResponse("201", "Created")
    public async createBook(@Body() requestBody: BookModel): Promise<BookModel> {

      try{
        const createdBook = await BookService.createBook(requestBody);
        return createdBook;

      }catch(error){
            throw new Error("Failed to create book: " + error.message);
      }
        
    }

    // @Get()
    // @SuccessResponse("200", "OK")
    // public async getAllBooks(): Promise<BookModel[]> {
    //     return await Book.find();
    // }

    // @Get("{bookId}")
    // @SuccessResponse("200", "OK")
    // @Response("404", "Not Found")
    // public async getBookById(@Path() bookId: string): Promise<BookModel> {
    //     const book = await Book.findById(bookId);
    //     if (!book) {
    //         this.setStatus(404);
    //         return;
    //     }
    //     return book;
    // }

    // @Delete("{bookId}")
    // @SuccessResponse("204", "No Content")
    // @Response("404", "Not Found")
    // public async deleteBook(@Path() bookId: string): Promise<void> {
    //     const deletedBook = await Book.findByIdAndDelete(bookId);
    //     if (!deletedBook) {
    //         this.setStatus(404);
    //     } else {
    //         this.setStatus(204);
    //     }
    //   }

}
