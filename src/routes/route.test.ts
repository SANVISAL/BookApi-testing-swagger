import request from 'supertest';
import app from '../app';
import { dbConnect,dbDisconnect,clearDatabase } from '../database/test-utils/dbHandler.utils';



beforeAll(async () => {
  await dbConnect();
  await clearDatabase(); // Clear the database before running tests
});

afterAll(async () => { 
  await dbDisconnect();
});

describe("Book Routes", () => {

  let bookId ;

  describe ("POST / books",()=>{
    it("Create a new Book a and responds with status 201",async()=>{
      const mockData = {
        title: "Test Book",
        author: "Test author",
        publishedDate: "2024-03-12",
    };
    const response = await request(app)
    
    .post("/books")
    .send (mockData);

    bookId = response.body.savedBook._id;
  
  
    expect (response.status).toBe(201);
    })
  })

  
describe('GET /books', () => {
 
  it('responds with JSON message and status 200', async () => {
    // Send a GET request to the /api/books endpoint
    const response = await request(app).get('/books');

    // Assert that the response status is 200
    expect(response.status).toBe(200);
    // expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.message).toEqual('Book list found !!'); 
  });
});


  describe ("Delete Book " , ()=>{
    it("delete Book with Book ID ", async ()=>{
      expect(bookId).toBeDefined();
      const response = await request(app).delete(`/books/${bookId}`);
      expect(response.status).toBe(204);
  
    })
  })



})







