"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookSchema = void 0;
const zod_1 = require("zod");
// Define a Zod schema for the book object
const bookSchema = zod_1.z.object({
    title: zod_1.z.string().nonempty(),
    author: zod_1.z.string().nonempty(),
    publishedDate: zod_1.z.string().nonempty(),
});
exports.bookSchema = bookSchema;
