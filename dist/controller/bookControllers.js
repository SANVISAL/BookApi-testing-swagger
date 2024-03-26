"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.BookController = void 0;
const tsoa_1 = require("tsoa"); // import { Book } from '../models';
const service_1 = require("../service/service");
let BookController = class BookController extends tsoa_1.Controller {
    // private bookService: BookService;
    constructor() {
        super();
        // this.bookService = new BookService();
    }
    createBook(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdBook = yield service_1.BookService.createBook(requestBody);
                this.setStatus(201);
                return createdBook;
            }
            catch (error) {
                this.setStatus(500);
                throw new Error("Failed to create book: " + error.message);
            }
        });
    }
};
exports.BookController = BookController;
__decorate([
    (0, tsoa_1.Post)(),
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
exports.BookController = BookController = __decorate([
    (0, tsoa_1.Route)('books'),
    (0, tsoa_1.Tags)("Books"),
    __metadata("design:paramtypes", [])
], BookController);
