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
exports.BookRepository = void 0;
const models_1 = require("../models");
class BookRepository {
    // Create a new book
    static create(bookData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = new models_1.Book(bookData);
                return yield book.save();
            }
            catch (error) {
                // Instead of wrapping the error, consider throwing it directly
                throw error;
            }
        });
    }
    // Get all books
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Book.find();
            }
            catch (error) {
                throw error;
            }
        });
    }
    // Find book by ID
    static findById(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Book.findById(bookId);
            }
            catch (error) {
                throw error;
            }
        });
    }
    // Delete book by ID
    static deleteById(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Attempt to delete the book by its ID
                const deleteBook = yield models_1.Book.findByIdAndDelete(Id);
                return deleteBook;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.BookRepository = BookRepository;
