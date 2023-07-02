import React, { useState } from "react";
import JobCard from "./JobCard";
import "./JobCardComponent.css"
import JobCard_Tab from "./Temp";

function JobCardComponent(params) {
    return(
        <div>
            <div className="tabs">
                <h1 className="font-bold py-5 text-3xl">Job Cards</h1>
            <JobCard_Tab />
            </div>
            {/* <JobCard/> */}
        </div>
    );
}

export default JobCardComponent;