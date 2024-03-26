"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationmongoID = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const basecustomError_1 = require("../utils/basecustomError");
const const_1 = require("../utils/const");
const validationmongoID = (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    // Check if the provided ID matches the MongoDB ObjectId format
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        console.log("Hello");
        const customError = new basecustomError_1.BaseCustomError("Invalid ID", const_1.StatusCode.NotFound);
        return next(customError); // Return here if the ID is invalid
    }
    next(); // Call next only if the ID is valid
};
exports.validationmongoID = validationmongoID;
