const e = require("express");
const express = require("express");
const router = express.Router();
const {
  createEvent,
  viewAllEvents,
  editEvent,
} = require("../controllers/eventController");

//create event
router.route("/create").post(createEvent);

//view events
router.route("/").get(viewAllEvents);

//edit event
router.route("/editevent").put(editEvent);

module.exports = router;
