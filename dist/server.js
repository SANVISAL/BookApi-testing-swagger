"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const app_1 = __importDefault(require("./app"));
exports.app = app_1.default;
const connectToDB_1 = __importDefault(require("./utils/connectToDB"));
const port = 5000;
(0, connectToDB_1.default)();
app_1.default.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
