"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = require("mongoose");
/**
 * Connect to MongoDB Atlas
 */
const connectDB = async () => {
    try {
        await (0, mongoose_1.connect)("mongodb+srv://root:root@cluster0.l9i01.mongodb.net/area?retryWrites=true&w=majority");
        console.log("MongoDB Connected...");
    }
    catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=db.js.map