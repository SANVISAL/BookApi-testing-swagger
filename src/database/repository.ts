import { Book } from "../models";

export class BookRepository {
  
  
  // Create a new book
  static async create(bookData) {
    try {
      const book = new Book(bookData);
      return await book.save();
    } catch (error) {
      // Instead of wrapping the error, consider throwing it directly
      throw error;
    }
  }

  // Get all books
  static async findAll() {
    try {
      return await Book.find();
    } catch (error) {
      throw error;
    }
  }

  // Find book by ID
  static async findById(bookId) {
    try {
      return await Book.findById(bookId);
    } catch (error) {
      throw error;
    }
  }

  // Delete book by ID
  static async deleteById(Id) {
    try {

      // Attempt to delete the book by its ID
      const deleteBook= await Book.findByIdAndDelete(Id);
      return deleteBook;
      
      
    } catch (error) {
      throw error;
    }
  }

//   // Update book by ID
//   static async updateById(bookId, updateData) {
//     try {
//       return await Book.findByIdAndUpdate(bookId, updateData, { new: true });
//     } catch (error) {
//       throw error;
//     }
//   }
}
