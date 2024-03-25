
import { Book } from '../src/models';
import { dbConnect, dbDisconnect, clearDatabase } from '../src/database/test-utils/dbHandler.utils';

  beforeAll(async () => {
    await dbConnect();
    await clearDatabase(); // Clear the database before running tests
  });

  afterAll(async () => {
    await dbDisconnect();
  });


// Describe block for Book Model testing
describe("Book Model", () => {

  // Test case: should book save successfully
 it ("should create and save a new Book ", async()=>{
   const newBook = new Book({
    title: "Test Book",
    author: "Test author",
    publishedDate:"2024-08-07",
   });
   // Save the book to the database
   const savedBook = await newBook.save();
   // Assert that the saved book exists and has the correct properties
   expect(savedBook).toBeDefined();
   expect(savedBook.title).toBe(newBook.title);
   expect(savedBook.author).toBe(newBook.author);
   expect(savedBook.publishedDate).toBe(newBook.publishedDate);
 });

/// fiind  book and Update
 it("should find an existing book", async ()=>{
  const newBook = new Book({
    title: "Test Book",
    author: "Test author",
    publishedDate:"2024-08-07",
   });
   await newBook.save();
   const updatedBook = await Book.findOneAndUpdate(
    { title: 'Test Book' },
    { $set: { title: 'Updated Test Book' } }, // Set the new title here
    { new: true }
  );
  // expect(updatedBook.title).toBe('Updated Test Book');
  expect (updatedBook?. title). toBe('Updated Test Book')// can replace string (" update  Test Book ") to newBook.title 
 })

// find Book 

 it ("find an existing Book " , async ()=>{
  const newBook = new Book({
    title: "Test Book",
    author: "Test author",
    publishedDate:"2024-08-07",
   });
   await newBook.save();
   const foundBook = await Book.where({ title: 'Test Book' }).findOne();
    expect(foundBook).toBeDefined();
    expect(foundBook!.title).toEqual('Test Book'); // can replace string ("Test Book ") to newBook.title 
  });


/// delete Book
it("should Delete an existing book ", async () => {
  const newBook = new Book({
      title: "Test Book",
      author: "Test author",
      publishedDate: "2024-08-07",
  });


  await newBook.save();
  // Find the ID of the newly saved book
  const savedBook = await Book.findOne({ title: "Test Book" });
  const bookId = savedBook?._id;

  console.log(bookId);

  // Delete the book by its ID
  await Book.findByIdAndDelete(bookId);

  // Verify Deletion
  const deletedBook = await Book.findOne(bookId);
  console.log(deletedBook);

  // Expect the deleted book to be null
  expect(deletedBook).toBeNull();
})

});

/// for run this testing use command npm test or npm run test 
