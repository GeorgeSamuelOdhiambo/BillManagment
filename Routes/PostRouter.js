const express = require("express");
const route = express.Router();

const postController = require("../Controls/PostController");

route.post("/", postController.postEntry);

module.exports = route;
