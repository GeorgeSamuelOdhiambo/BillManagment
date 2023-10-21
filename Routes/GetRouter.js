const express = require("express");
const route = express.Router();

const getController = require("../Controls/GetController");

route.get("/", getController.getEntry);

module.exports = route;
