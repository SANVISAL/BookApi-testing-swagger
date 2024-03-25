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
    // let bookRepository: BookRepository;

    // beforeEach(() => {
    //      bookRepository = new BookRepository();
    // });

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

    // // get Book By ID
    // describe(" Test repo delete Book By ID", () => {
    //     let testBookID;
    //     beforeAll(async () => {
    //         // Create a test book in the database before running the test cases
    //         const testBook = new Book({
    //             title: "Test Book",
    //             author: "Test Author",
    //             publishedDate: "2024-03-24"
    //         });
    //         await testBook.save();
    //         testBookID = testBook._id;
    //     });
        
    //     afterAll(async()=>{
    //         await Book.findByIdAndDelete(testBookID)
    //     })
    
    //     test("should delete an existing book and return null", async () => {
    //         const deletedBook = await BookRepository.deleteById(testBookID);
    //         expect(deletedBook).toBeNull();
    
    //         // Verify that the book no longer exists in the database
    //         const foundBook = await Book.findById(testBookID);
    //         expect(foundBook).toBeNull();
    //     });
      
    //    
    //   });
      
});
