
import {z} from "zod";

// Define a Zod schema for the book object
const bookSchema = z.object({
    title: z.string().nonempty(),
    author: z.string().nonempty(),
    publishedDate: z.string().nonempty(),
  });
  
  export { bookSchema };