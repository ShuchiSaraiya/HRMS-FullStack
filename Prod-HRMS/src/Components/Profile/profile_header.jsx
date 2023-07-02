import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Logo from "../../assets/logo.png";
import TabPanel from "@mui/lab/TabPanel";
import MoreInfo from "./moreinfo";
import Publishments from "./publishments";
import QT from "./Qt";
import data from "./dataset";
import "./Profile.css";
import { useNavigate } from "react-router";
import { storage } from "../../Firebase";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { toast } from "@mobiscroll/react";

export default function ProfileHeader() {
  const [downloadUrl, setDownloadUrl] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const nav = useNavigate();
  const [value, setValue] = React.useState("1");
  const [detail, setdetail] = React.useState(data);
  const [show, switchShow] = React.useState(false);
  const [mail, setMail] = React.useState("");

  const [user, setName] = React.useState("UserName");
  
  const imageFolder = ref(storage, "images/");

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

  async function fet() {
    await axios.get("/api/email").then((result) => {
      setMail(result.data);
    });
  }

  useEffect(() => {
    fet();
  }, []);

  const [imgUpload, setImageUpload] = React.useState(null);

  function upload(params) {
    if (imgUpload == null) {
      return;
    }
    const imageRef = ref(storage, `images/${mail}`);
    uploadBytes(imageRef, imgUpload).then(() => {
      toast({
        message: "Success",
        color: "success",
      });
    });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div class="grid grid-rows-5 overflow-y-auto">
      <div className="bg-gradient-to-l from-gray-200 to-stone-400 container lg:w-8/12 md:w-9/12 flex items-center  px-14 py-2 mt-5 m-auto rounded-full space-x-14">
        <div>
          {isLoading ? (
            <div
              className="spinner"
              onClick={() => {
                switchShow((prev) => !prev);
              }}
            ></div>
          ) : (
            <img
              className="img"
              class="rounded-full h-auto m-2 aspect-square border-4 border-stone-600"
              width={160}
              onClick={() => {
                switchShow((prev) => !prev);
              }}
              src={downloadUrl}
              alt="photo"
            />
          )}
          {show && (
            <div className="m-auto">
              <input
                type="file"
                id="file"
                hidden
                onChange={(e) => {
                  setImageUpload(e.target.files[0]);
                }}
              />
              <button
                onClick={upload}
                for="file"
                className="flex p-0.5 px-1.5 font-bold bg-gray-300 text-lg rounded-md hover:rounded-xl hover:bg-gray-500 transition-all duration-300 w-fit hover:animate-pulse"
              >
                Upload
              </button>
            </div>
          )}
        </div>
        <div class="space-y-1">
          <p class="text-2xl font-bold mb-2">{detail.qt.name}</p>
          <p class="text-xl">{detail.qt.designation}</p>
          <p class="text-xl pb-1">{detail.qt.department}</p>
          <button
            onClick={() => {
              nav("/Edit");
            }}
            class="flex p-0.5 px-1.5 font-bold bg-gray-300 text-lg rounded-md hover:rounded-xl hover:bg-gray-500 transition-all duration-300 w-fit hover:animate-pulse"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div class="row-span-4 mt-24">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <div className=" container w-10/12 h-auto flex justify-center items-center mt-4 mx-10">
              <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab
                    label="Personal Info"
                    value="1"
                    sx={{ fontSize: "15px", boxShadow: 2, fontWeight: "bold" }}
                  />
                  <Tab
                    label="Publishments"
                    value="2"
                    sx={{ fontSize: "15px", boxShadow: 2, fontWeight: "bold" }}
                  />
                  <Tab
                    label="Additional Info"
                    value="3"
                    sx={{ fontSize: "15px", boxShadow: 2, fontWeight: "bold" }}
                  />
                </TabList>
              </Box>
            </div>
            <TabPanel value="1">
              <QT data={detail.qt} />
            </TabPanel>
            <TabPanel value="2">
              <Publishments data={detail.pub} />
            </TabPanel>
            <TabPanel value="3">
              <MoreInfo data={detail.info} />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
