import React, { useState, useEffect } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout, LayoutGroup } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import { Button } from "@mui/material";
import axios from "axios";
import { toast } from "@mobiscroll/react";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  function formatDate(date) {
    const DateobJ = new Date(date);
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    return DateobJ.toLocaleDateString("en-GB", options);
  }
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <span>{param.Title}</span>
      </div>
      <div className="detail">
        <span>
          {param.sourceDept} - {param.destinationDept}{" "}
        </span>
        <span> {param.OverallStatus} </span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const [dept, setDept] = useState("");
  async function fetch() {
    const data = await axios.get("/api/dept");
    console.log(data.data);
    setDept(data.data);
  }

  const [level, setLevel] = useState(1);
  async function fetchlvl(params) {
    console.log("Calling lvl");
    const lvl = await axios.get("/api/lvl");
    const lev = parseInt(lvl.data);
    console.log(lvl);
    setLevel(lev);
  }

  useEffect(() => {
    fetchlvl();
    fetch();
  }, []);

  function formatDate(date) {
    const DateobJ = new Date(date);
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    return DateobJ.toLocaleDateString("en-GB", options);
  }
  const idParam = param.id;

  function ApproveJC(params) {
    axios
      .post("/api/ApproveJC", { id: idParam, dep: param.destinationDept })
      .then(() => {
        toast({
          message: "Job Approved ",
          color: "info",
        });
      });
  }
  function DeclineJC(params) {
    axios
      .post("/api/DeclineJC", { id: idParam, dep: param.destinationDept })
      .then(() => {
        toast({
          message: "Job Declined",
          color: "info",
        });
      });
  }
  function AcceptJC(params) {
    axios.post("/api/AcceptJC", { id: idParam }).then(() => {
      toast({
        message: "Job Accepted",
        color: "info",
      });
    });
  }
  function RejectJC(params) {
    axios.post("/api/RejectJC", { id: idParam }).then(() => {
      toast({
        message: "Job Rejected",
        color: "info",
      });
    });
  }

  var authority = "";
  if (level >= 3) {
    if (dept == param.sourceDept) {
      authority = "Sender";
    }
    if (dept == param.destinationDept) {
      authority = "Reciever";
    }
  }
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.Title}</span>
      <span>{param.Description}</span>
      <span>
        {param.sourceDept}-{param.destinationDept}{" "}
      </span>
      <span>Approval Status : {param.ApprovalStatus}</span>
      <span>Overall Status: {param.OverallStatus}</span>
      <span>Assigned To: {param.AssignedTo}</span>
      <span>Created At: {formatDate(param.createdAt)}</span>
      <span>
        {authority == "Reciever" && (
          <span>
            <Button variant="contained" color="success" onClick={ApproveJC}>
              Approve
            </Button>
            <Button variant="contained" color="error" onClick={DeclineJC}>
              Decline
            </Button>
          </span>
        )}
        {authority == "Sender" && (
          <span>
            <Button variant="contained" color="success" onClick={AcceptJC}>
              Accept
            </Button>
            <Button variant="contained" color="error" onClick={RejectJC}>
              Reject
            </Button>
          </span>
        )}
      </span>
    </motion.div>
  );
}

export default Card;
