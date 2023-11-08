// app.js
import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

//import indexRouter from "./routes/index";
//import usersRouter from "./routes/users";
import imagesRouter from "./routes/imagesRouter"; 
import commentsRouter from "./routes/commentsRouter"; // import the images router

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

//app.use("/", indexRouter);
//app.use("/users", usersRouter);
app.use("/api/images", imagesRouter); // use the images router
app.use("/api/comments", commentsRouter);

app.listen(3000, () => {
  console.log("Server running normally on port 3000");
});

export default app;
