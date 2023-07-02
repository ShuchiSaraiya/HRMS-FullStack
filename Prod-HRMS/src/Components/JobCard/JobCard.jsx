import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./JobCard.css";
import axios from "axios";



const JobCard = (props) => {
  const [cardsData,setData] = useState([]);
  async function fetchSent() {
    await axios.get('/api/fetchSent').then((res)=>{
      setData(res.data)
    })
  }
  async function fetchRecieve() {
    await axios.get('/api/fetch').then((res)=>{
      setData(res.data);
    })
  }
  useEffect(()=>{
    if(props.type == 'sent'){
       fetchSent()
      console.log(cardsData)
    }else{
      fetchRecieve()
      console.log(cardsData)
    }
  }, [])
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              Title={card.Title}
              sourceDept={card.sourceDept}
              destinationDept={card.destinationDept}
              Description={card.Description}
              ApprovalStatus={card.ApprovalStatus}
              OverallStatus={card.OverallStatus}
              createdAt={card.createdAt}
              AssignedTo={card.assignedTo}
              id={card._id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default JobCard;
