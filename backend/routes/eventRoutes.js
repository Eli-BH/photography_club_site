const e = require("express");
const express = require("express");
const router = express.Router();
const {
  createEvent,
  viewAllEvents,
  editEvent,
  deleteEvent,
} = require("../controllers/eventController");

//create event
router.route("/create").post(createEvent);

//delete event
router.route("/delete/:id").delete(deleteEvent);

//view events
router.route("/").get(viewAllEvents);

//edit event
router.route("/editevent").put(editEvent);

module.exports = router;
