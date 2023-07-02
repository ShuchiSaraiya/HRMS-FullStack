const express = require("express");
const { Router } = require("express");
const router = Router();
const MongoStore = require("connect-mongo");
const bodyparser = require("body-parser");
const ObjectId = require("mongodb").ObjectId;

const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Kolkata");

require("../Databse/Database");

const {
  CivilCalenderEvent,
  ITCalenderEvent,
  ElectronicsCalenderEvent,
} = require("../Databse/Schemas/Calender");

router.use(express.json());
router.use(express.urlencoded());

function repair(date) {
  let newDate = new Date(date);
  let resolved = newDate.getTime() + 5.5 * 60 * 60 * 1000;
  return resolved;
}

const departmentCollections = {
  Civil: CivilCalenderEvent,
  IT: ITCalenderEvent,
  Electronics: ElectronicsCalenderEvent,
};

router.use("/api/addEvent", async (req, res) => {
  const generateId = () => new ObjectId().toHexString();
  console.log("Adding Event");
  const collection = departmentCollections[req.user.Department];
  console.log(req.body.start);
  console.log(req.body.end);
  const result = await collection.create({
    id: generateId(),
    user: req.user.email,
    start: repair(req.body.start),
    end: repair(req.body.end),
    recurring: req.body.recurring,
    title: req.body.title,
    allday: req.body.allday,
    Description: req.body.Description,
  });
  console.log(result);
  console.log("Added Event");
  res.send(result);
});

router.use("/api/updateEvent", async (req, res) => {
  const collection = departmentCollections[req.user.Department];
  console.log("This is an updated one");
  console.log(req.body.id);
  const updatedEvent = {
    id: req.body.id,
    user: req.user.email,
    start: req.body.start,
    end: req.body.end,
    recurring: req.body.recurring,
    title: req.body.title,
    allDay: req.body.allDay,
    Description: req.body.Description,
  };
  console.log(updatedEvent);
  try {
    await collection.findOneAndUpdate(
      { id: req.body.id },
      { $set: updatedEvent }
    );
    res.json({ message: "Event updated successfully", event: updatedEvent });
    console.log("This happned");
  } catch (error) {
    console.log(err);
    res.json({ message: "Error Updating Event", event: updatedEvent });
  }
});

router.use("/api/updatednd", async (req, res) => {
  const collection = departmentCollections[req.user.Department];
  console.log("This is an updated one");
  console.log(req.body.id);
  const updatedEvent = {
    id: req.body.id,
    user: req.user.email,
    start: repair(req.body.start),
    end: repair(req.body.end),
    recurring: req.body.recurring,
    title: req.body.title,
    allDay: req.body.allDay,
    Description: req.body.Description,
  };
  console.log(updatedEvent);
  try {
    await collection.findOneAndUpdate(
      { id: req.body.id },
      { $set: updatedEvent }
    );
    res.json({ message: "Event updated successfully", event: updatedEvent });
    console.log("This happned");
  } catch (error) {
    console.log(err);
    res.json({ message: "Error Updating Event", event: updatedEvent });
  }
});

router.use("/api/fetchEvents", async (req, res) => {
  if (!req.user) {
    res.send("nav");
  } else {
    const email = req.user.email;
    const collection = departmentCollections[req.user.Department];
    const data = await collection.find({ user: email });
    console.log(data);
    res.json(data);
  }
});

router.use("/api/deleteEvent", async (req, res) => {
  console.log(req.body.id);
  const collection = departmentCollections[req.user.Department];
  try {
    await collection.deleteOne({ id: req.body.id }).then(() => {
      res.sendStatus(200);
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
