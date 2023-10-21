const express = require("express");
const bodyParser = require("body-parser");
const cron = require('node-cron');
require("dotenv").config();

const postController = require("./Controls/PostController");
const getRouter = require("./Routes/GetRouter");
const postRouter = require("./Routes/PostRouter");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(getRouter, postRouter);

cron.schedule('*/2 * * * *', () => {
  postController.billReminder();
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
