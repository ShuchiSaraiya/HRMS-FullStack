const mongoose = require("mongoose");

const CivilLeaveApplicationSchema = new mongoose.Schema({
  Name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  Title: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  Description: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  Type: {
    type: mongoose.SchemaTypes.String,
    required: true,
    enum: ["Casual", "Half Pay", "Privilage", "Duty", "Without Pay"],
  },
  StartDate: {
    type: Date,
    required: true,
  },
  EndDate: {
    type: Date,
    required: true,
  },
  AssignedTo: {
    type: mongoose.SchemaTypes.String,
    required: true,
    default: "Not Assigned",
  },
  UserLevel: {
    type: Number,
    required: true,
  },
  Half: {
    type: mongoose.SchemaTypes.Boolean,
    required: true,
    default: false,
  },
  ApprovalStatus: {
    type: mongoose.SchemaTypes.String,
    required: true,
    enum: ["Approved", "Rejected", "Pending"],
    default: "Pending",
  },
  LeaveDuration: {
    type: mongoose.SchemaTypes.Number,
    required: true,
    default: 0,
  },
});

const ITLeaveApplicationSchema = new mongoose.Schema({
    Name: {
        type: mongoose.SchemaTypes.String,
        required: true,
      },
      Title: {
        type: mongoose.SchemaTypes.String,
        required: true,
      },
      Description: {
        type: mongoose.SchemaTypes.String,
        required: true,
      },
      Type: {
        type: mongoose.SchemaTypes.String,
        required: true,
        enum: ["Casual", "Half Pay", "Privilage", "Duty", "Without Pay"],
      },
      StartDate: {
        type: Date,
        required: true,
      },
      EndDate: {
        type: Date,
        required: true,
      },
      AssignedTo: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: "Not Assigned",
      },
      UserLevel: {
        type: Number,
        required: true,
      },
      Half: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        default: false,
      },
      ApprovalStatus: {
        type: mongoose.SchemaTypes.String,
        required: true,
        enum: ["Approved", "Rejected", "Pending"],
        default: "Pending",
      },
      LeaveDuration: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        default: 0,
      },
});

const ElectronicsLeaveApplicationSchema = new mongoose.Schema({
    Name: {
        type: mongoose.SchemaTypes.String,
        required: true,
      },
      Title: {
        type: mongoose.SchemaTypes.String,
        required: true,
      },
      Description: {
        type: mongoose.SchemaTypes.String,
        required: true,
      },
      Type: {
        type: mongoose.SchemaTypes.String,
        required: true,
        enum: ["Casual", "Half Pay", "Privilage", "Duty", "Without Pay"],
      },
      StartDate: {
        type: Date,
        required: true,
      },
      EndDate: {
        type: Date,
        required: true,
      },
      AssignedTo: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: "Not Assigned",
      },
      UserLevel: {
        type: Number,
        required: true,
      },
      Half: {
        type: mongoose.SchemaTypes.Boolean,
        required: true,
        default: false,
      },
      ApprovalStatus: {
        type: mongoose.SchemaTypes.String,
        required: true,
        enum: ["Approved", "Rejected", "Pending"],
        default: "Pending",
      },
      LeaveDuration: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        default: 0,
      }
});

CivilLeaveApplicationSchema.pre("save", function (next) {
  const startDate = new Date(this.StartDate);
  const endDate = new Date(this.EndDate);
  let durationInDays;

  if (this.Half) {
    durationInDays = 0.5;
  } else {
    durationInDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
  }

  this.LeaveDuration = durationInDays;
  next();
});

ElectronicsLeaveApplicationSchema.pre("save", function (next) {
  const startDate = new Date(this.StartDate);
  const endDate = new Date(this.EndDate);
  let durationInDays;

  if (this.Half) {
    durationInDays == 0.5;
  } else {
    durationInDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
  }

  this.LeaveDuration = durationInDays;
  next();
});

ITLeaveApplicationSchema.pre("save", function (next) {
  const startDate = new Date(this.StartDate);
  const endDate = new Date(this.EndDate);
  let durationInDays;

  if (this.Half) {
    durationInDays == 0.5;
  } else {
    durationInDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
  }

  this.LeaveDuration = durationInDays;
  next();
});

const CivilLeave = mongoose.model("CivilLeave", CivilLeaveApplicationSchema);
const ITLeave = mongoose.model("ITLeave", ITLeaveApplicationSchema);
const ElectronicsLeave = mongoose.model(
  "ElectronicsLeave",
  ElectronicsLeaveApplicationSchema
);

module.exports = {
  CivilLeave,
  ITLeave,
  ElectronicsLeave,
};
