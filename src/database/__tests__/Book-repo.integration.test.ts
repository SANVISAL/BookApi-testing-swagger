import { MongoMemoryServer } from "mongodb-memory-server";
import { BookRepository } from "../repository";
import { dbConnect, dbDisconnect } from "../test-utils/dbHandler.utils";
import { Book } from "../../models";
import { after } from "node:test";

// Connect to the in-memory MongoDB server before running any tests
beforeAll(async () => {
    await dbConnect();
});

// Disconnect from the in-memory MongoDB server after running all tests
afterAll(async () => {
    await dbDisconnect();
});

describe("BookRepository integration test", () => {

    describe("Create Book Method", () => {
        test("should successfully create a new book in the database with provided data", async () => {
            const mockData = {
                title: "Test Book",
                author: "Test author",
                publishedDate: "2024-03-12",
            };

            try {
                // Create a new book using the repository's create method
                const newBook = await BookRepository.create(mockData);

                // Assert that the new book is defined and its properties match the mock data
                expect(newBook).toBeDefined();
                expect(newBook.title).toEqual(mockData.title);
                expect(newBook.author).toEqual(mockData.author);

                // Find the newly created book in the database by its ID
                const foundBook = await BookRepository.findById(newBook.id);

                // Assert that the found book is defined and its properties match the mock data
                expect(foundBook).toBeDefined();
                expect(foundBook?.title).toEqual(mockData.title);
            } catch (error) {
                // If an error occurs during the test, fail the test and log the error
                fail(`Test failed with error: ${error}`);
            }
        });
 
    });

    // get all Book
    describe("Get Book", ()=>{
        test("should Get all Book from Database", async()=>{
            try{
                const AllBook= await BookRepository.findAll();

                expect(Array.isArray(AllBook)).toBeTruthy();
                expect(AllBook.length).toBeGreaterThan(0)

            }catch(error){
                fail(`Test failed with error: ${error}`);
            }
        })

    })
// Delete Book by ID
describe("Delete Book", () => {
    test("should delete a book by ID", async () => {
        try {
            // Create a new book to be deleted
            const mockData = {
                title: "Test Book",
                author: "Test author",
                publishedDate: "2024-03-12",
            };
            const newBook = await BookRepository.create(mockData);

            // Delete the newly created book by its ID
            await BookRepository.deleteById(newBook.id);

            // Try to find the deleted book by its ID
            const BookDelete = await BookRepository.findById(newBook.id);

            // Expectation: The deleted book should not be found (null)
            expect(BookDelete).toBeNull();
        } catch (error) {
            fail(`Test failed with error: ${error}`);
        }
    });
});
      
});
