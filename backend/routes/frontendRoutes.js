const e = require("express");
const express = require("express");
const route = express.Router();
const {
  createEvents,
  viewAllEvents,
  editEvent,
} = require("../controllers/frontendController");

//create event
route.router("/createevent").post(createEvents);

//view events
route.router("/").get(viewAllEvents);

//edit event
route.router("/editevent").put(editEvent);

module.exports = route;
