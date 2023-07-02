const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    Name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    Designation: {
      type: mongoose.SchemaTypes.String,
      Default: "Not Set",
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    CreatedAt: {
      type: mongoose.SchemaTypes.Date,
      required: true,
      default: new Date(),
    },
    Department: {
      type: mongoose.SchemaTypes.String,
      required: true,
      enum: ["Civil", "Mechanical", "IT", "Electronics"],
    },
  },
  { strict: false },
  { discriminatorKey: "Department" }
);

const CivilUserSchema = new mongoose.Schema(
  {
    email: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    Name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    Designation: {
      type: mongoose.SchemaTypes.String,
      Default: "Not Set",
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    CreatedAt: {
      type: mongoose.SchemaTypes.Date,
      required: true,
      default: new Date(),
    },
    Department: {
      type: mongoose.SchemaTypes.String,
      required: true,
      enum: ["Civil", "Mechanical", "IT", "Electronics"],
      default: "Civil",
    },
    Level:{
      type:mongoose.SchemaTypes.Number,
      default:1,
      required: true
    }
  },
  { strict: false },
  { collection: "CivilUsers", discriminatorKey: "Department" }
);

const InfoTechUserSchema = new mongoose.Schema(
  {
    email: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    Name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    Designation: {
      type: mongoose.SchemaTypes.String,
      Default: "Not Set",
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    CreatedAt: {
      type: mongoose.SchemaTypes.Date,
      required: true,
      default: new Date(),
    },
    Department: {
      type: mongoose.SchemaTypes.String,
      enum: ["Civil", "Mechanical", "IT", "Electronics"],
      required: true,
      default: "IT",
    },
    Level:{
      type:mongoose.SchemaTypes.Number,
      defualt:1
    }
  },
  { strict: false },
  { collection: "ITUsers", discriminatorKey: "Department" }
);

const ElectronicsUserSchema = new mongoose.Schema(
  {
    email: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    Name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    Designation: {
      type: mongoose.SchemaTypes.String,
      Default: "Not Set",
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    CreatedAt: {
      type: mongoose.SchemaTypes.Date,
      required: true,
      default: new Date(),
    },
    Department: {
      type: mongoose.SchemaTypes.String,
      enum: ["Civil", "Mechanical", "IT", "Electronics"],
      required: true,
      default: "Electronics",
    },
    Level:{
      type:mongoose.SchemaTypes.Number,
      defualt:1
    }
  },
  { strict: false },
  { collection: "ElectronicsUsers", discriminatorKey: "Department" }
);

// const User = mongoose.model("users", UserSchema);

const CivilUser = mongoose.model("CivilUser", CivilUserSchema);
const ITUser = mongoose.model("ITUser", InfoTechUserSchema);
const ElectronicsUser = mongoose.model(
  "ElectronicsUser",
  ElectronicsUserSchema
);

module.exports = {
  CivilUser,
  ITUser,
  ElectronicsUser,
};
