"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const routesAuth = require("./routes/auth");
const routesDiscord = require("./routes/discord");
const routesArea = require("./routes/area");
const db_1 = require("./config/db");
const cors_1 = require("./middlewares/cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Express = require("express");
const area_1 = require("./area/area");
const app = Express();
app.use(passport.initialize());
require("./middlewares/passport");
app.use(cookieParser());
app.use(cors_1.cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
(0, db_1.connectDB)().then(() => {
    setInterval(function () {
        (0, area_1.area)();
    }, 10000);
});
/* This is the main route that will be used to handle all the requests. */
app.use(routesAuth);
app.use(routesDiscord);
app.use(routesArea);
app.listen("8080", () => {
    console.log(`Example app listening on port 8080`);
});
//# sourceMappingURL=index.js.map