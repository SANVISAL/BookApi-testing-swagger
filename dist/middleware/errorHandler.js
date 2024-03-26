"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const basecustomError_1 = require("../utils/basecustomError");
function errorHandler(err, req, res, next) {
    if (err instanceof basecustomError_1.BaseCustomError) {
        console.log(err);
        const statusCode = err.statusCode;
        res.status(statusCode).json({
            statusCode: statusCode,
            message: err.message,
        });
    }
    next();
}
exports.errorHandler = errorHandler;
