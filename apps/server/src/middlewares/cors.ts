import * as Cors from "cors";
import { origins } from "../utils/origins";

/* This is defining the options for the cors middleware. */
const options: Cors.CorsOptions = {
  credentials: true,
  methods: "GET,OPTIONS,POST,DELETE,HEAD,PATCH",
  preflightContinue: false,
  origin: origins
};

export const cors = Cors(options);
