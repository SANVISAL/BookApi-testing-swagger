

import { Book } from "../models"
import { BookRepository } from "../database/repository";

export class BookService{
    
    static async createBook(bookData){
        try{
            
             return await BookRepository.create(bookData)

        }catch(Error){
            throw  new Error (Error.message)
        }
    } 

    /// to get all book 
    static async getAllBook(){
        try{
            // 
            return await BookRepository.findAll();

        }catch(Error){
            throw new Error(Error.message)
        }
    } 
    /// to get book by id 
    static async getBookByID (bookID){
        try{
            return await BookRepository.findById(bookID)
            
        }catch(Error){
            throw new Error (Error.message)
        }
    }
    //     /// to delete book 

    static async deleteById (ID){
        try{
            const deletebook = await BookRepository.deleteById(ID);
                if (!deletebook){
                    throw new Error("Book Not Found")
                }
                return {message: "Deleted Book Successfully"}; 
            // return await BookRepository.deleteById(ID)  
         }catch(Error){
            throw new Error (Error.message)
        }
    } 
    //        /// to update book 
    // static async UpdateBook (bookID, UpdateData){
    //     try{
    //         return await BookRepository.updateById(bookID,UpdateData)
    //     }catch(Error){
    //             throw new Error (Error.message)
    //         }
    //     } 

}