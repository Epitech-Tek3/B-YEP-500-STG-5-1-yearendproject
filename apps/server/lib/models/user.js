"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    accessToken: {
        type: Array
    },
    providers: {
        type: Array
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String,
        required: false
    },
    picture: {
        type: String
    },
    createdAt: {
        type: Date,
        default: (0, mongoose_1.now)()
    },
    areaList: {
        type: [
            {
                module: String,
                action: String,
                reaction: String,
                created: Date
            }
        ],
        required: false
    },
    actions: [
        {
            google: {
                like: String
            }
        }
    ]
});
exports.User = (0, mongoose_1.model)("users", userSchema);
//# sourceMappingURL=user.js.map