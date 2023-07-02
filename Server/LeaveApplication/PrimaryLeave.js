const express = require("express");
const { Router } = require("express");
const router = Router();
const MongoStore = require("connect-mongo");
const bodyparser = require("body-parser");
const ObjectId = require("mongodb").ObjectId;
require("../Databse/Database");

const {
  CivilLeave,
  ITLeave,
  ElectronicsLeave,
} = require("../Databse/Schemas/Leave");

router.use(express.json());
router.use(express.urlencoded());

const departmentCollections = {
  Civil: CivilLeave,
  IT: ITLeave,
  Electronics: ElectronicsLeave,
};

router.use("/api/applyLeave", async (req, res) => {
  const now = new Date();
 
  const { title, description, Type } = req.body;
  const Name = req.user.Name;
  const collection = departmentCollections[req.user.Department];
  console.log((req.body.EndDate >= req.body.StartDate))
  function oldDate() {
    if (
      now <= new Date(req.body.StartDate) &&
      now <= new Date(req.body.EndDate)
    ) {
      console.log("Not old")
      return false;
    } else {
      console.log("Old")
      return true;
    }
  }
  if ((!oldDate(now)) && (req.body.EndDate >= req.body.StartDate)){
    const result = await collection.create({
      Name: Name,
      Title: title,
      Description: description,
      Type: Type,
      StartDate: new Date(req.body.StartDate),
      EndDate: new Date(req.body.EndDate),
      UserLevel: req.user.Level,
    });
    res.send(
      "Success"
    );
  
}else{
    if(oldDate(now)){
    res.send({msg:"Old Leave Cannot Be Applies"})
    }else{
      res.send({msg:"Starting Date Cannot be After Ending Date"})
    }
  }
});

router.use("/fetchLower", async (req, res) => {
  const db = departmentCollections[req.user.Department];
  const level = req.user.Level - 1;
  const data = await db.find({ UserLevel: level });
  res.json(data);
});

router.use("/ApproveLeave", (req, res) => {
  const id = req.body.id;
  const db = departmentCollections[req.user.Department];
  db.updateOne({ _id: ObjectId(id) }, { $set: { ApprovalStatus: "Approved" }} )
    .then((result) => {
      res.send(`User with ID ${id} updated successfully`);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error updating user");
    });
});

router.use("/RejectLeave", async (req, res) => {
  const id = req.body.id;
  const db = departmentCollections[req.user.Department];
  await db
    .updateOne({ _id: ObjectId(id) }, { $set: { ApprovalStatus: "Rejected" } })
    .then((result) => {
      res.send(`User with ID ${id} updated successfully`);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error updating user");
    });
});

router.use("/api/fetchPrevious", async (req, res) => {
  const userName = req.user.Name;
  const db = departmentCollections[req.user.Department];
  const data = await db.find({ Name: userName });
  res.send(data);
});

module.exports = router;
