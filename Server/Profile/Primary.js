const express = require("express");
const { Router } = require("express");
const router = Router();
const MongoStore = require("connect-mongo");
const bodyparser = require("body-parser");
const ObjectId = require("mongodb").ObjectId;
require("../Databse/Database");

const { Profile } = require("../Databse/Schemas/Profile");

router.use(express.json());
router.use(express.urlencoded());

router.use("/api/fetchProfile", async (req, res) => {
  console.log("Inside Fetch Profile");
  const obj = req.body;
  await Profile.findOne({ mail: req.body.email }).then((result) => {
    res.json(result);
    console.log(result);
  });
});

router.use("/api/addProfile", async (req, res) => {
    console.log('Insdie add ')
  console.log(req.user.email);
  console.log(req.user);
  console.log(body)
  await Profile.findOneAndUpdate(
    { mail: req.user.email },
    { $set: obj },
    { upsert: true, returnOriginal: false }
  ).then(() => {
    res.sendStatus(200);
  });
});

module.exports = router;
