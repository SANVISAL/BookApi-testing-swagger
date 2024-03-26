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
const repository_1 = require("../repository");
const dbHandler_utils_1 = require("../test-utils/dbHandler.utils");
// Connect to the in-memory MongoDB server before running any tests
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, dbHandler_utils_1.dbConnect)();
}));
// Disconnect from the in-memory MongoDB server after running all tests
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, dbHandler_utils_1.dbDisconnect)();
}));
describe("BookRepository integration test", () => {
    describe("Create Book Method", () => {
        test("should successfully create a new book in the database with provided data", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockData = {
                title: "Test Book",
                author: "Test author",
                publishedDate: "2024-03-12",
            };
            try {
                // Create a new book using the repository's create method
                const newBook = yield repository_1.BookRepository.create(mockData);
                // Assert that the new book is defined and its properties match the mock data
                expect(newBook).toBeDefined();
                expect(newBook.title).toEqual(mockData.title);
                expect(newBook.author).toEqual(mockData.author);
                // Find the newly created book in the database by its ID
                const foundBook = yield repository_1.BookRepository.findById(newBook.id);
                // Assert that the found book is defined and its properties match the mock data
                expect(foundBook).toBeDefined();
                expect(foundBook === null || foundBook === void 0 ? void 0 : foundBook.title).toEqual(mockData.title);
            }
            catch (error) {
                // If an error occurs during the test, fail the test and log the error
                fail(`Test failed with error: ${error}`);
            }
        }));
    });
    // get all Book
    describe("Get Book", () => {
        test("should Get all Book from Database", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const AllBook = yield repository_1.BookRepository.findAll();
                expect(Array.isArray(AllBook)).toBeTruthy();
                expect(AllBook.length).toBeGreaterThan(0);
            }
            catch (error) {
                fail(`Test failed with error: ${error}`);
            }
        }));
    });
    // Delete Book by ID
    describe("Delete Book", () => {
        test("should delete a book by ID", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                // Create a new book to be deleted
                const mockData = {
                    title: "Test Book",
                    author: "Test author",
                    publishedDate: "2024-03-12",
                };
                const newBook = yield repository_1.BookRepository.create(mockData);
                // Delete the newly created book by its ID
                yield repository_1.BookRepository.deleteById(newBook.id);
                // Try to find the deleted book by its ID
                const BookDelete = yield repository_1.BookRepository.findById(newBook.id);
                // Expectation: The deleted book should not be found (null)
                expect(BookDelete).toBeNull();
            }
            catch (error) {
                fail(`Test failed with error: ${error}`);
            }
        }));
    });
});
