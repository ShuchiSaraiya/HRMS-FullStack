const mongoose = require("mongoose");
const { CivilUser, ITUser, ElectronicsUser } = require("./User");

const CivilJobCardSchema = new mongoose.Schema({
  destinationDept: {
    type: mongoose.SchemaTypes.String,
    required: true,
    enum: [
      "Civil",
      "Information Technology",
      "Mechanical",
      "Electronics",
      "Electronics and Communication",
      "Computer",
      "Production",
    ],
    default: "Civil"
  },
  sourceDept: {
    type: mongoose.SchemaTypes.String,
    required: true,
    enum: [
      "Civil",
      "IT",
      "Mechanical",
      "Electronics",
      "Electronics and Communication",
      "Computer",
      "Production",
    ],
  },
  Title: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  Description: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  assignedTo: {
    type: mongoose.SchemaTypes.String,
    required:true,
    default:'Not Yet Assigned',
  },
  ApprovalStatus: {
    type: mongoose.SchemaTypes.String,
    required: true,
    enum: ["Approved", "Rejected", "Pending"],
    default: "Pending"
  },
  OverallStatus: {
    type: mongoose.SchemaTypes.String,
    emun: ["Pending", "Approved", "Rejected", "Completed"],
    default: "Pending",
    required:true,
  },
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    required: true,
    default: new Date(),
  },
});

const ITJobCardSchema = new mongoose.Schema({
    destinationDept: {
      type: mongoose.SchemaTypes.String,
      required: true,
      enum: [
        "Civil",
        "IT",
        "Mechanical",
        "Electronics",
        "Electronics and Communication",
        "Computer",
        "Production",
      ],
      default: "Information Technology"
    },
    sourceDept: {
      type: mongoose.SchemaTypes.String,
      required: true,
      enum: [
        "Civil",
        "IT",
        "Mechanical",
        "Electronics",
        "Electronics and Communication",
        "Computer",
        "Production",
      ],
    },
    Title: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    Description: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    assignedTo: {
      type: mongoose.SchemaTypes.String,
      default: 'Not Yet Assigned'
    },
    ApprovalStatus: {
      type: mongoose.SchemaTypes.String,
      require: true,
      enum: ["Approved", "Rejected", "Pending"],
      default: "Pending"
    },
    OverallStatus: {
      type: mongoose.SchemaTypes.String,
      emun: ["Pending", "Approved", "Rejected", "Completed"],
      default: "Pending",
      required:true
    },
    createdAt: {
      type: mongoose.SchemaTypes.Date,
      required: true,
      default: new Date(),
    },
  });

  const ElectronicsJobCardSchema = new mongoose.Schema({
    destinationDept: {
      type: mongoose.SchemaTypes.String,
      required: true,
      enum: [
        "Civil",
        "IT",
        "Mechanical",
        "Electronics",
        "Electronics and Communication",
        "Computer",
        "Production",
      ],
      default: "Electronics"
    },
    sourceDept: {
      type: mongoose.SchemaTypes.String,
      required: true,
      enum: [
        "Civil",
        "Information Technology",
        "Mechanical",
        "Electronics",
        "Electronics and Communication",
        "Computer",
        "Production",
      ],
    },
    Title: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    Description: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
    },
    ApprovalStatus: {
      type: mongoose.SchemaTypes.String,
      required: true,
      enum: ["Approved", "Rejected", "Pending"],
      default: "Pending"
    },
    OverallStatus: {
      type: mongoose.SchemaTypes.String,
      emun: ["Pending", "Approved", "Rejected", "Completed"],
      default: "Pending",
      required:true
    },
    createdAt: {
      type: mongoose.SchemaTypes.Date,
      required: true,
      default: new Date(),
    },
  });
  
  

const CivilJC =  mongoose.model("CivilJobCard", CivilJobCardSchema);
const ITJC =  mongoose.model("ITJobCard", ITJobCardSchema);
const ElectronicsJC =  mongoose.model("ElectronicsJobCard", ElectronicsJobCardSchema);

module.exports = {
    CivilJC,
    ITJC,
    ElectronicsJC,
}
