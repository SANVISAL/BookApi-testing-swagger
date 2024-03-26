"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = void 0;
class ResponseError extends Error {
    // message: string;
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.ResponseError = ResponseError;
