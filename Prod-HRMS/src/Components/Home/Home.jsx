import "./Home.css";
import Schedule from "./Schedule";
import Attendence from "./Attendence";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "@mobiscroll/react";

function Home() {
  let timeNow = new Date().getHours();
  let greeting =
    timeNow >= 5 && timeNow < 12
      ? "Good Morning"
      : timeNow >= 12 && timeNow < 18
      ? "Good Afternoon"
      : "Good evening";

      
  const nav = useNavigate();
  const [user, setName] = useState("UserName");
  async function fetch() {
    const data = await axios.get("/api/nav");
    console.log(data.data);
    setName(data.data);
  }

  async function authed() {
    const data = await axios.get("/api/authed");
    console.log(data);
    if (!(data.data)) {
      nav("/Login");
      toast({
        message: "Session Timed out, Log in",
        color: "danger",
      });
    }
  }

  useEffect(() => {
    authed();
    fetch();
  }, []);

  return (
    <div className="page">
      <h1 className="font-bold py-5 text-3xl">{greeting} {user}</h1>
      <Schedule />
      <Attendence />
    </div>
  );
}

export default Home;
