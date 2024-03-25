import  express, { NextFunction }  from "express";


export function globalmiddleware (req:express.Request , res: express.Response , next: NextFunction){
    console.log(`Global middleware: Request URL - ${req.originalUrl}, Time - ${new Date()}`);
    // You can add any common middleware logic here
    next();
}
