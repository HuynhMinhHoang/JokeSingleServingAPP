import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import connectDB from "./config/connectDB";
import cors from "cors";
import cookieParser from "cookie-parser";

require("dotenv").config();

let app = express();
app.use(cors({ credentials: true, origin: true }));

// config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config cookie
app.use(cookieParser());

viewEngine(app);
initWebRoute(app);

connectDB();

let port = process.env.PORT;
app.listen(port, () => {
  console.log("backend run success = " + port);
});
