"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalmiddleware = void 0;
function globalmiddleware(req, res, next) {
    console.log(`Global middleware: Request URL - ${req.originalUrl}, Time - ${new Date()}`);
    // You can add any common middleware logic here
    next();
}
exports.globalmiddleware = globalmiddleware;
