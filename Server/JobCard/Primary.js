const express = require("express");
const { Router } = require("express");
const router = Router();
const MongoStore = require("connect-mongo");
const bodyparser = require("body-parser");
const ObjectId = require("mongodb").ObjectId;

require("../Databse/Database");

const { ITJC, CivilJC, ElectronicsJC } = require("../Databse/Schemas/JobCard");

router.use(express.json());
router.use(express.urlencoded());

const findJCByID = async (id) => {
  let job;

  job = await CivilJC.findById(ObjectId(id));
  if (job) return CivilJC;

  job = await ITJC.findById(ObjectId(id));
  if (job) return ITJC;

  job = await ElectronicsJC.findById(ObjectId(id));
  if (job) return ElectronicsJC;

  return null;
};

const departmentCollections = {
  Civil: CivilJC,
  IT: ITJC,
  Electronics: ElectronicsJC,
};

router.use("/api/addJobCard", async (req, res) => {
  const { title, description, dept } = req.body;
  console.log("Inside the api");
  const sourceDept = req.user.Department;
  // console.log(Title);
  // console.log(Description);
  // console.log(destinationDept);
  console.log(req.body);
  const db = departmentCollections[dept];
  const newJob = await db.create({
    destinationDept: dept,
    sourceDept: sourceDept,
    Title: title,
    Description: description,
  });
  res.send(newJob);
});

router.use("/api/AcceptJC", async (req, res) => {
  console.log("Pinged Accept");
  const id = req.body.id;
  const userDb = departmentCollections[req.user.Department];
  userDb
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { OverallStatus: "Accepted" } }
    )
    .then((result) => {
      res.send(`User with ID ${id} updated successfully`);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error updating user");
    });
});

router.use("/api/ApproveJC", async (req, res) => {
  const id = req.body.id;
  const dep = req.body.dep;
  const userDb = departmentCollections[dep];
  console.log(userDb);
  if (userDb) {
    console.log("This is" + userDb);
    userDb
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { ApprovalStatus: "Approved" } }
      )
      .then((result) => {
        res.send(`User with ID ${id} updated successfully`);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error updating user");
      });
  }
});

router.use("/api/DeclineJC", async (req, res) => {
  const id = req.body.id;
  const dep = req.body.dep;
  const userDb = departmentCollections[dep];
  if (userDb) {
    userDb
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { ApprovalStatus: "Rejected" } }
      )
      .then((result) => {
        res.send(`User with ID ${id} updated successfully`);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error updating user");
      });
  }
});

router.use("/api/RejectJC", async (req, res) => {
  const id = req.body.id;
  const userDb = departmentCollections[req.user.Department];
  console.log(userDb);
  userDb
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { OverallStatus: "Rejected" } }
    )
    .then((result) => {
      res.send(`User with ID ${id} updated successfully`);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error updating user");
    });
});

router.use("/Complete", async (req, res) => {
  const id = req.body.id;
  const userDb = departmentCollections[req.user.Department];
  userDb
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { OverallStatus: "Completed" } }
    )
    .then((result) => {
      res.send(`User with ID ${id} updated successfully`);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error updating user");
    });
});

module.exports = router;
