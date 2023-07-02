import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import JobCardForm from "./Form";
import JobCard from "./JobCard";

export default function JobCard_Tab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <div className=" container lg:w-10/12 h-auto flex justify-center items-center mt-4 m-auto">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Request New JobCard" value="1" />
              <Tab label="Sent" value="2" />
              <Tab label="Received" value="3" />
            </TabList>
          </Box>
        </div>
        <TabPanel value="1">
          <JobCardForm />
        </TabPanel>
        <TabPanel value="2">
            <JobCard type={'sent'}/>
        </TabPanel>
        <TabPanel value="3">
            <JobCard  type={'recieved'} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
