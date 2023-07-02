const { Router } = require("express");
const express = require("express");
const router = Router();
const session = require("express-session");
const passport = require("passport");
const hashing = require("./Utils/helper");
const MongoStore = require("connect-mongo");
const bodyparser = require("body-parser");

require("./Strategies/local");
require("./Databse/Database");
const {
  CivilUser,
  ITUser,
  ElectronicsUser,
} = require("./Databse/Schemas/User");
const { Collection } = require("mongoose");

router.use(express.json());
router.use(express.urlencoded());

router.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/Test",
    }),
  })
);
router.use(passport.initialize());
router.use(passport.session());

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.send("200");
  console.log("Logged");
});

const departmentCollections = {
  Civil: CivilUser,
  IT: ITUser,
  Electronics: ElectronicsUser,
};

router.use("/api/fetchUsers", async (req, res) => {
  const collection = departmentCollections[req.user.Department];
  const data = await collection.find();
  const namesArray = data.map(({ Name }) => Name);
  console.log(namesArray)
  res.json(namesArray);
  //In future Do this code with Projection as it fetches the whole collection with full documents
});

router.post("/api/register", async (req, res) => {
  const { email, Name, Department } = req.body;
  console.log(Department);
  console.log(Name);
  console.log(email);

  const collection = departmentCollections[Department];
  console.log(collection);

  if (!collection) {
    return res.status(400).send("Invalid department");
  }

  try {
    const civilUserExists = await CivilUser.findOne({ email });
    const itUserExists = await ITUser.findOne({ email });
    const electronicsUserExists = await ElectronicsUser.findOne({ email });
    if (civilUserExists || itUserExists || electronicsUserExists) {
      res.status(400).send({ msg: "User Already Exists!" });
    } else {
      const password = hashing.hashpassword(req.body.password);
      console.log(password);
      const newUser = await collection.create({
        email,
        Name,
        password,
        Department,
      });
      res.sendStatus(201);
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error checking email existence");
  }
});

router.get('/api/email', (req,res)=>{
  console.log('pinged mail fetch')
  const mail = req.user.email;
  res.send(mail);
})

router.get('/api/dept', (req,res)=>{
  console.log('pinged dept fetch')
  const dept = req.user.Department;
  res.send(dept);
})

router.get('/api/lvl', (req,res)=>{
  console.log('pinged level fetch')
  const lvl = req.user.Level;
  console.log(lvl)
  res.send(lvl.toString());
})

router.get("/api/nav", (req, res) => {
  console.log("Pinged");
  console.log(req.user);
  const user = req.user.Name;
  const designation = req.user.designation;
  console.log(user);
  res.send(user);
});

router.get("/api/logout", (req, res) => {
  console.log("Goodbye");
  req.logout(req.user, (err) => {
    if (err) return next(err);
    res.redirect("/login");
  });
});

router.get("/api/authed", (req, res) => {
  if (req.user != undefined) {
    res.send(true);
    console.log("User is Authed");
  } else {
    res.send(false);
    console.log("User is not authed");
  }
});

module.exports = router;
