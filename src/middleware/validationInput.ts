import { z } from "zod";
import { Request, Response, NextFunction } from "express";

// Define a middleware function that accepts a Zod schema for input validation
export const validateSchemaMiddleware = (schema: z.ZodObject<any>) => {
    
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate the request body against the provided schema
      schema.parse(req.body);
      next();

    } catch (err) {

      next (err)
      console.log(err)
    }
  };
};
