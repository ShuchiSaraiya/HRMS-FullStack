import React from "react";
import Card from "./Card";
import "./Leave.css";
import axios from "axios";
import { useState, useEffect } from "react";

// const cardsData = [
//     {
//       title: "Leave 1",
//       name:"Jugal",
//       color: {
//         backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
//       boxShadow: "0px 10px 20px 0px #FDC0C7",
//       },
//       Type:"Casual",
//       startDate:"",
//       endDate: "",
//       Description: "This is a short Description",
//       startDate:"2023-04-03T07:06:37.692+00:00",endDate:"2023-04-03T07:06:37.692+00:00",
//       ApprovalStatus:"Pending",
//       LeaveDuration:6,

//     },
//     {
//         title: "Leave 1",
//         name:"Jugal",
//         color: {
//           backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
//         boxShadow: "0px 10px 20px 0px #FDC0C7",
//         },
//         Type:"Casual",
//         startDate:"",
//         endDate: "",
//         Description: "This is a short Description",
//         startDate:"2023-04-03T07:06:37.692+00:00",endDate:"2023-04-03T07:06:37.692+00:00",
//         ApprovalStatus:"Pending",
//         LeaveDuration:6,

//       },
//       {
//         title: "Leave 1",
//         name:"Jugal",
//         color: {
//           backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
//         boxShadow: "0px 10px 20px 0px #FDC0C7",
//         },
//         Type:"Casual",
//         startDate:"",
//         endDate: "",
//         Description: "This is a short Description",
//         startDate:"2023-04-03T07:06:37.692+00:00",endDate:"2023-04-03T07:06:37.692+00:00",
//         ApprovalStatus:"Pending",
//         LeaveDuration:6,

//       },
//   ];

const Leave = (props) => {
  const [cardsData, setData] = useState([]);
  async function fetchSent() {
    await axios.get("/api/fetchPrevious").then((res) => {
      setData(res.data);
    });
  }
  async function fetchRecieve() {
    await axios.get("/api/fetchLower").then((res) => {
      setData(res.data);
    });
  }

  useEffect(() => {
    if (props.type == "prev") {
      fetchSent();
      console.log(cardsData);
    } else {
      fetchRecieve();
      console.log(cardsData);
    }
  }, []);

  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              Name={card.Name}
              title={card.Title}
              Description={card.Description}
              Type={card.Type}
              ApprovalStatus={card.ApprovalStatus}
              LeaveDuration={card.LeaveDuration}
              endDate={card.EndDate}
              startDate={card.StartDate}
              id = {card._id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Leave;
