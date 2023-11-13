// app.js
import express, { json, urlencoded } from "express";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";

import indexRouter from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//import usersRouter from "./routes/users";
//import imagesRouter from "./routes/imagesRouter";
//import commentsRouter from "./routes/commentsRouter"; // import the images router

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "front", "dist")));

app.use("/", indexRouter);
//app.use("/users", usersRouter);
//app.use("/api/images", imagesRouter); // use the images router
//app.use("/api/comments", commentsRouter);

export default app;
