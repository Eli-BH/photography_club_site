const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");

//@desc Create new event
//@route POST /api/events/newevent
//@auth Private/admin

const createEvent = asyncHandler(async (req, res) => {
  const { title, date, type, description } = req.body;

  const eventExists = await Event.findOne({ title });

  if (eventExists) {
    res.status(400);
    throw new Error("This event already exists");
  }

  const event = await Event.create({
    title,
    date,
    type,
    description,
  });

  if (event) {
    res.status(201).json({
      _id: event._id,
      title: event.title,
      date: event.date,
      type: event.type,
      description: event.description,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Event Data");
  }
});

//@desc View all Events
//@route GET /api/events
//@auth Public
const viewAllEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({});

  res.status(200).json(events);
});

//@desc Edit Events
//@route POST /api/events/edit
//@auth Private/Admin
const editEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    event.title = req.body.name || event.title;
    event.date = req.body.data || event.date;
    event.description = req.body.description || event.description;
    event.type = req.body.type || req.body.type;

    const updatedEvent = await event.save();

    res.json({
      _id: event._id,
      title: updatedEvent.title,
      date: updatedEvent.date,
      description: updatedEvent.description,
      type: updatedEvent.type,
    });
  } else {
    res.status(404).send("Event not found");
  }
});

module.exports = {
  createEvent: createEvent,
  viewAllEvents: viewAllEvents,
  editEvent: editEvent,
};
