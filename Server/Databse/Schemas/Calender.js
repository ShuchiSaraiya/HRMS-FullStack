const mongoose = require("mongoose");

const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Kolkata');


const CivilEvent = new mongoose.Schema({
  id:{
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  user: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  start: {
    type: mongoose.SchemaTypes.Date,
    required: true,
  },
  end: {
    type: mongoose.SchemaTypes.Date,
    required: true,
  },
  recurring: {
    repeat: {
      type: mongoose.SchemaTypes.String,
      enum: ["weekly", "monthly", "yearly"],
    },
    weekday: {
      type: mongoose.SchemaTypes.String,
      enum: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    },
  },
  title: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  Description:{
    type:mongoose.SchemaTypes.String,
  },
  allDay: {
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: false,
  },
  color: {
    type: mongoose.SchemaTypes.String,
  },
});

const ITEvent = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  start: {
    type: mongoose.SchemaTypes.Date,
    required: true,
  },
  end: {
    type: mongoose.SchemaTypes.Date,
    required: true,
  },
  recurring: {
    repeat: {
      type: mongoose.SchemaTypes.String,
      enum: ["weekly", "monthly", "yearly"],
    },
    weekday: {
      type: mongoose.SchemaTypes.String,
      enum: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    },
  },
  title: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  Description:{
    type:mongoose.SchemaTypes.String,
  },
  allDay: {
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: false,
  },
  color: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});

const ElectronicsEvent = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  start: {
    type: mongoose.SchemaTypes.Date,
    required: true,
  },
  end: {
    type: mongoose.SchemaTypes.Date,
    required: true,
  },
  recurring: {
    repeat: {
      type: mongoose.SchemaTypes.String,
      enum: ["weekly", "monthly", "yearly"],
    },
    weekday: {
      type: mongoose.SchemaTypes.String,
      enum: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    },
  },
  title: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  Description:{
    type:mongoose.SchemaTypes.String,
  },
  allDay: {
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: false,
  },
  color: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});

const CivilCalenderEvent = mongoose.model("CivilCalender", CivilEvent);
const ITCalenderEvent = mongoose.model("ITCalender", ITEvent);
const ElectronicsCalenderEvent = mongoose.model(
  "ElectronicsCalender",
  ElectronicsEvent
);

module.exports = {
  CivilCalenderEvent,
  ITCalenderEvent,
  ElectronicsCalenderEvent,
};
