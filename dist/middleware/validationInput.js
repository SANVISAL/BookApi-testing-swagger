"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchemaMiddleware = void 0;
// Define a middleware function that accepts a Zod schema for input validation
const validateSchemaMiddleware = (schema) => {
    return (req, res, next) => {
        try {
            // Validate the request body against the provided schema
            schema.parse(req.body);
            next();
        }
        catch (err) {
            next(err);
            console.log(err);
        }
    };
};
exports.validateSchemaMiddleware = validateSchemaMiddleware;
