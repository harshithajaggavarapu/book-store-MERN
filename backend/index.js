import express from "express";
import { PORT, CONNECTIONSTRING } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();

//middleware function for express to understand and parse json post requests
app.use(express.json());

// middleware for cors
app.use(
  cors({
    origin: "http://localhost:3000/",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// creating default http route
app.get("/", (request, response) => {
  return response.status(200).send("Welcome to Book Store App");
});

app.use("/books", booksRoute);

// connection to database and starting the server
mongoose
  .connect(CONNECTIONSTRING)
  .then(() => {
    console.log("Connection Successful");
    // Connect to server only if DB connection is successful
    // function to listen to our port
    // listen takes PORT no and  a call back function
    app.listen(PORT, () => {
      console.log("App is listening to port:" + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
