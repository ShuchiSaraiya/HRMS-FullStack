const express = require("express");
const { Router } = require("express");
const router = Router();

const { ITJC, CivilJC, ElectronicsJC } = require("../Databse/Schemas/JobCard");

router.use(express.json());
router.use(express.urlencoded());

const departmentCollections = {
  Civil: CivilJC,
  IT: ITJC,
  Electronics: ElectronicsJC,
};

router.use("/api/fetch", async (req, res) => {
  console.log('pinged fetch recvied')
  const department = req.user.Department;
  const db = departmentCollections[department];
  const data = await db.find({ ApprovalStatus: "Approved" });
  console.log(data) 
  res.json(data);
});

router.use("/api/fetchDept", async (req, res) => {
  const department = req.user.Department;
  const db = departmentCollections[department];
  const data = await db.find();
  console.log(data) 
  res.json(data);
});




router.use("/api/fetchSent", async (req, res) => {
  console.log("Pinged Sent")
  const department = req.user.Department;
  const jobcards = await Promise.all([
    ITJC.find({ ApprovalStatus: "Pending", sourceDept: department }),
    CivilJC.find({ ApprovalStatus: "Pending", sourceDept: department }),
    ElectronicsJC.find({ ApprovalStatus: "Pending", sourceDept: department }),
  ]);
  const allJobcards = jobcards.reduce((acc, val) => acc.concat(val), []);
  res.send(allJobcards);
});

router.use("/fetchAssigned", async (req, res) => {
  const department = req.user.Department;
  const name = req.user.Name;
  const db = departmentCollections[department];
  const data = await db.find({ assignedTo: name });
  console.log(name);
  res.json(data);
});

router.use("/fetchCompleted", async (req, res) => {
  const department = req.user.Department;
  const db = departmentCollections[department];
  const data = await db.find({ OverallStatus: "Completed" });
  res.json(data);
});

module.exports = router;