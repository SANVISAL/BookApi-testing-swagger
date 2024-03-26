"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const repository_1 = require("../database/repository");
class BookService {
    static createBook(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield repository_1.BookRepository.create(bookData);
            }
            catch (Error) {
                throw new Error(Error.message);
            }
        });
    }
    /// to get all book 
    static getAllBook() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // 
                return yield repository_1.BookRepository.findAll();
            }
            catch (Error) {
                throw new Error(Error.message);
            }
        });
    }
    /// to get book by id 
    static getBookByID(bookID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield repository_1.BookRepository.findById(bookID);
            }
            catch (Error) {
                throw new Error(Error.message);
            }
        });
    }
    //     /// to delete book 
    static deleteById(ID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletebook = yield repository_1.BookRepository.deleteById(ID);
                if (!deletebook) {
                    throw new Error("Book Not Found");
                }
                return { message: "Deleted Book Successfully" };
                // return await BookRepository.deleteById(ID)  
            }
            catch (Error) {
                throw new Error(Error.message);
            }
        });
    }
}
exports.BookService = BookService;
