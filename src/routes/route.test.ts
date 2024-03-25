import request from 'supertest';
import app from '../app';
import { dbConnect,dbDisconnect,clearDatabase } from '../database/test-utils/dbHandler.utils';


describe('GET /books', () => {
  beforeAll(async () => {
    await dbConnect();
    await clearDatabase(); // Clear the database before running tests
  });

  afterAll(async () => { 
    await dbDisconnect();
  });

  it('responds with JSON message and status 200', async () => {
    // Send a GET request to the /api/books endpoint
    const response = await request(app).get('/books');

    // Assert that the response status is 200
    expect(response.status).toBe(200);
    // expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.message).toEqual('Book list found !!'); 
  });
 
  // it('handles errors gracefully', async () => {
  //   // Here you can simulate an error condition
  //   // For example, calling an endpoint that doesn't exist
  //   const response = await request(app).get('/nonexistent');

  //   // Assert that the response status is an error (e.g., 404)
  //   expect(response.status).not.toBe(200);
  //   // Assert that the response body contains an error message
  //   expect(response.body.error).toBeDefined();
  // });

});