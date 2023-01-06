import * as passport from "passport";
const routesAuth = require("./routes/auth");
const routesDiscord = require("./routes/discord");
const routesArea = require("./routes/area");
import { connectDB } from "./config/db";
import { cors } from "./middlewares/cors";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as Express from "express";
import { area } from "./area/area";

const app = Express();

app.use(passport.initialize());

require("./middlewares/passport");

app.use(cookieParser());
app.use(cors);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

connectDB().then(() => {
  setInterval(function () {
    area();
  }, 10000);
});

/* This is the main route that will be used to handle all the requests. */
app.use(routesAuth);
app.use(routesDiscord);
app.use(routesArea);

app.listen("8080", () => {
  console.log(`Example app listening on port 8080`);
});
