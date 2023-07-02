import React, { useEffect } from "react";
import data from "./dataset";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import QT_Edit from "./Qt_form";
import Publishments_Edit from "./publishments_form";
import MoreInfo_Edit from "./moreinfo_form";

export default function EditProfile() {
    // useEffect(()=>{
    //     axios.get('/api/fetchProfile')
    // },[])

    const [detail, setdetail] = React.useState(data)
    const [value, setValue] = React.useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div class="flex">
            {/* <div class="w-fit flex items-start pt-3 hidden">
                <div class="container rounded dark:bg-gray-800 shadow-xl mt-20 mx-7" >
                    <div class="h-full sm:h-full border-2 border-black rounded overflow-hidden">
                        <img class="w-full rounded-t"
                            src="https://imgs.search.brave.com/f0G9u7vnioA24weYiYhOUv1aC5uWfdDhSh55km0yaRE/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/bThULURJbzB5Q1Zv/aFczSWZfSGZnSGFF/SyZwaWQ9QXBp"
                            alt="Bvm_Logo" />
                    </div>
                    <div class="flex justify-start px-3.5 -mt-6 mb-5">
                        <span clspanss="block relative">
                            <img alt="User_Photo"
                                src={detail.qt.img}
                                class="mx-auto object-cover rounded-full h-28 w-28 bg-white p-1 hover:animate-spin"/>
                        </span>
                    </div>
                    <div>
                        <div class="px-7 mb-8">
                            <h2 class="text-2xl font-bold dark:text-gray-300">{detail.qt.name}</h2>
                            <p class="text-gray-400 text-xl mt-3 dark:text-gray-400">{detail.qt.designation}</p>
                            <p class="text-gray-400 text-xl dark:text-gray-400">{detail.qt.department}</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <div className="container w-fit h-auto flex justify-center items-center mt-5 mx-auto pr-48">
                        <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Personal Info" value="1" />
                                <Tab label="Publishments" value="2" />
                                <Tab label="Additional Info" value="3" />
                            </TabList>
                        </Box>
                    </div>
                    <TabPanel value="1">
                        <QT_Edit
                            data = {detail.qt}
                        />
                    </TabPanel>
                    <TabPanel value="2">
                        <Publishments_Edit 
                            data = {detail.pub}
                        />
                    </TabPanel>
                    <TabPanel value="3">
                        <MoreInfo_Edit 
                            data = {detail.info}
                        />
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}