import React, { useState } from "react";
import "./Card.css";
import { motion, AnimateSharedLayout, LayoutGroup } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import { Button } from "@mui/material";
import { toast } from "@mobiscroll/react";
import axios from "axios";
// parent Card

const Card = (props) => {
  function acceptJC(params) {
   const data= {
      id:params.id,
    }
    console.log(params.id)
    axios.post(('/api/AcceptJC', data)).then(()=>{
      toast({
        message:"Status Updated",
        color:"success"
      }
      )
    })
  }
  function RejectJC(params) {
    console.log("Clicked")
  }
  
  
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
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return DateobJ.toLocaleDateString('en-GB', options);
  }
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow:"0px 10px 20px 0px #FDC0C7",
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <span>
          {formatDate(param.startDate)} - {formatDate(param.endDate)}
        </span>
        <span> {param.ApprovalStatus} </span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  function formatDate(date) {
    const DateobJ = new Date(date);
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return DateobJ.toLocaleDateString('en-GB', options);
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
      <span>{param.title}</span>
      <span>{param.Description}</span>
      <span>
      {formatDate(param.startDate)} - {formatDate(param.endDate)}
      </span>
      <span>Approval Status : {param.ApprovalStatus}</span>
      <span>Type: {param.Type}</span>
      <span>Duration : {param.LeaveDuration}</span>
      
      
    </motion.div>
  );
}

export default Card;
