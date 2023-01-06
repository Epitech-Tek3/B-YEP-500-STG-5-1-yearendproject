"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
const Cors = require("cors");
const origins_1 = require("../utils/origins");
/* This is defining the options for the cors middleware. */
const options = {
    credentials: true,
    methods: "GET,OPTIONS,POST,DELETE,HEAD,PATCH",
    preflightContinue: false,
    origin: origins_1.origins
};
exports.cors = Cors(options);
//# sourceMappingURL=cors.js.map