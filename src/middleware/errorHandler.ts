import { Request, Response, NextFunction } from "express";
import { ResponseError } from '../utils/responeError'; // Corrected import statement
import { BaseCustomError } from "../utils/basecustomError";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    
    if (err instanceof BaseCustomError) { 
       
        console.log(err)
        const statusCode= err.statusCode;
        res.status(statusCode).json({
            statusCode: statusCode,
            message: err.message,

        })
       
    }
    next()
}
