import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import axios from "axios";
import { motion } from "framer-motion";
import { storage } from "../../Firebase";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";
import { useNavigate } from "react-router";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Home",
    url: "/",
  },
  {
    icon: UilClipboardAlt,
    heading: "Calender",
    url: "/Calender",
  },
  {
    icon: UilUsersAlt,
    heading: "Job Card",
    url: "/Jobcard",
  },
  {
    icon: UilPackage,
    heading: "Apply Leave",
    url: "/Leave",
  },
  {
    icon: UilChart,
    heading: "Profile",
    url: "/Profile",
  },
  {
    icon: UilChart,
    heading: "Resume",
    url: "/Resume",
  },
];

const Sidebar = () => {
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imgName, setImgName] = useState(".jpg");
  const imageFolder = ref(storage, "images/");
  const [user, setName] = useState("UserName");
  async function fetch() {
    const data = await axios.get("/api/nav");
    setName(data.data);
  }

  async function fetchPfp() {
    async function getName() {
      await axios.get("/api/email").then((res) => {
        const mail = res.data;
        return mail;
      });
    }
    await listAll(imageFolder).then((response) => {
      const imageObject = response.items.find(
        async (item) => item.name === (await getName())
      );
      if (imageObject) {
        getDownloadURL(imageObject).then((res) => {
          setDownloadUrl(res);
          setIsLoading(false);
        });
      } else {
        setDownloadUrl(Logo);
        setIsLoading(false);
      }
    });
  }

  useEffect(() => {
    async function call() {
      await fetch();
      await fetchPfp();
    }
    call();
  }, []);

  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(false);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  // console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars
          style={{
            background: "rgba(202, 139, 239, 0.6)",
            padding: "7px",
            borderRadius: "50px",
          }}
        />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          {isLoading ? (
            <div className="spinner"></div>
          ) : (
            <img className="img" src={downloadUrl} alt="" />
          )}
          <div className="hea">
            <span>{user}</span>
          </div>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => {
                  setSelected(index);
                  navigate(item.url, { replace: true });
                }}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div
            className="menuItem"
            onClick={() => {
              axios.get("/api/logout");
              navigate("/login");
            }}
          >
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
