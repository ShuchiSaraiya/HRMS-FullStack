import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LeaveForm from "./Form";
import Leave from "./Leave";

export default function Leave_Tab() {
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
              <Tab label="Apply" value="1" />
              <Tab label="Previous" value="2" />
              {/* <Tab label="For Approval" value="3" /> */}
            </TabList>
          </Box>
        </div>
        <TabPanel value="1" >
          <LeaveForm />
        </TabPanel>
        <TabPanel value="2">
            <Leave type={'prev'}/>
        </TabPanel>
        {/* <TabPanel value="3">
            <Leave type={'approval'} />
        </TabPanel> */}
      </TabContext>
    </Box>
  );
}
