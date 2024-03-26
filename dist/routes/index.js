"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.router = void 0;
const bookRoutes_1 = require("./bookRoutes");
Object.defineProperty(exports, "router", { enumerable: true, get: function () { return bookRoutes_1.router; } });
const express_1 = __importDefault(require("express"));
exports.routes = express_1.default.Router();
// routes.use('/api/employee', employeeRouter);
