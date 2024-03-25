
import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { BaseCustomError } from "../utils/basecustomError";
import { StatusCode } from "../utils/const";

export const validationmongoID = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { bookId } = req.params;
    // Check if the provided ID matches the MongoDB ObjectId format
    if (!mongoose.isValidObjectId(bookId)) {

        console.log("Hello");
        const customError = new BaseCustomError("Invalid ID", StatusCode.NotFound);
        return next(customError); // Return here if the ID is invalid
        
    }
    next(); // Call next only if the ID is valid
};
