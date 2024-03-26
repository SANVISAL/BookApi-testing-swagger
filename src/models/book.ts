// bookModel.js

import mongoose, { Model } from "mongoose";

export interface BookModel extends Document {
  title: string;
  author: string;
  publishedDate: string;
}

const bookSchema = new mongoose.Schema <BookModel>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: String, required: true },
});

export const Book: Model<BookModel> = mongoose.model<BookModel>('Book', bookSchema);

