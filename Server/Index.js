const express = require("express");
const Authenticate = require('./Authentication')
// const Profile = require('./Profile')
const JobCard = require('./JobCard/Primary')
const fetchCard = require('./JobCard/Fetch')
const Leave = require('./LeaveApplication/PrimaryLeave')
const Event = require('./Calender/Event')
const Profile = require('./Profile/Primary')

const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Kolkata');
console.log(Date())

const app = express();
const PORT = 9001;

app.use(Profile)
app.use(Authenticate)
app.use(JobCard)
app.use(fetchCard)
app.use(Leave)
app.use(Event)

app.listen(PORT, () => console.log("Hello this is running on " + PORT));