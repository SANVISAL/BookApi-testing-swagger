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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const dbHandler_utils_1 = require("../database/test-utils/dbHandler.utils");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, dbHandler_utils_1.dbConnect)();
    yield (0, dbHandler_utils_1.clearDatabase)(); // Clear the database before running tests
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, dbHandler_utils_1.dbDisconnect)();
}));
describe("Book Routes", () => {
    let bookId;
    describe("POST / books", () => {
        it("Create a new Book a and responds with status 201", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockData = {
                title: "Test Book",
                author: "Test author",
                publishedDate: "2024-03-12",
            };
            const response = yield (0, supertest_1.default)(app_1.default)
                .post("/books")
                .send(mockData);
            bookId = response.body.savedBook._id;
            expect(response.status).toBe(201);
        }));
    });
    describe('GET /books', () => {
        it('responds with JSON message and status 200', () => __awaiter(void 0, void 0, void 0, function* () {
            // Send a GET request to the /api/books endpoint
            const response = yield (0, supertest_1.default)(app_1.default).get('/books');
            // Assert that the response status is 200
            expect(response.status).toBe(200);
            // expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.message).toEqual('Book list found !!');
        }));
    });
    describe("Delete Book ", () => {
        it("delete Book with Book ID ", () => __awaiter(void 0, void 0, void 0, function* () {
            expect(bookId).toBeDefined();
            const response = yield (0, supertest_1.default)(app_1.default).delete(`/books/${bookId}`);
            expect(response.status).toBe(204);
        }));
    });
});
