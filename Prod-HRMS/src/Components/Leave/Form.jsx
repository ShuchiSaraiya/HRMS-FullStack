import axios from "axios";
import React from "react";
import { toast } from "@mobiscroll/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function LeaveForm() {
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [type, setType] = React.useState("Casual");
  function handleType(ev) {
    setType(ev.target.value);
    setFormdata((prev) => {
      return {
        ...prev,
        Type: ev.target.value,
      };
    });
  }
  const handlestartDate = (date) => {
    setStartDate(date);
    setFormdata((prev) => {
      return {
        ...prev,
        StartDate: date,
      };
    });
  };
  const handleEndDate = (date) => {
    setEndDate(date);
    setFormdata((prev) => {
      return {
        ...prev,
        EndDate: date,
      };
    });
  };
  const [LeaveData, setFormdata] = React.useState({
    Name: "",
    title: "",
    description: "",
    Type: "",
    StartDate: "",
    EndDate: "",
    AssignedTo: "",
    UserLevel: 0,
    Half: false,
    ApprovalStatus: "",
    LeaveDuration: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormdata((prevformData) => {
      return {
        ...prevformData,
        [name]: value,
      };
    });
  }

  const ListStyle = {
    webkitappearance: "none",
    mozappearance: "none",
    appearance: "none",
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(LeaveData);

    axios.post("/api/applyLeave", LeaveData).then((res) => {
      toast({
        message: res.msg,
      });
    });
  }

  return (
    <div>
      <div class="flex-col justify-center h-full pt-2">
        <div class="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg border-2 border-gray-200">
          <form
            class="w-full max-w-lg py-5 px-5"
            id="formId"
            onSubmit={handleSubmit}
          >
            <div class="md:flex md:items-center mb-5" name="date">
              <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-left mb-1 text-lg md:mb-0">
                  Title
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  name="title"
                  class="bg-gray-200 text-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black h-12"
                  type="text"
                  required
                  onChange={handleChange}
                  value={LeaveData.title}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-5" name="date">
              <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-left mb-1 text-lg md:mb-0">
                  StartDate
                </label>
              </div>
              <div class="md:w-2/3">
                <DatePicker
                  selected={startDate}
                  onChange={handlestartDate}
                  dateFormat="dd/MM/yyyy"
                  className="bg-gray-200 rounded focus:bg-white"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-5" name="date">
              <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-left mb-1 text-lg md:mb-0">
                  EndDate
                </label>
              </div>
              <div class="md:w-2/3">
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDate}
                  dateFormat="dd/MM/yyyy"
                  className="bg-gray-200 rounded focus:bg-white"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-5">
              <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-left mb-1 text-lg md:mb-0">
                  Description
                </label>
              </div>
              <div class="md:w-2/3">
                <textarea
                  name="description"
                  rows="4"
                  class=" text-lg bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
                  onChange={handleChange}
                  required
                  value={LeaveData.description}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-5">
              <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-left mb-1 text-lg md:mb-0">
                  Type
                </label>
              </div>
              <div class="md:w-3/12">
                <select
                  id="leave-type "
                  onChange={handleType}
                  className="rounded p-1"
                >
                  <option value="Casual">Casual Leave</option>
                  <option value="Half Pay">Half Pay Leave</option>
                  <option value="Privilage">Previlage Leave</option>
                  <option value="Duty">Duty Leave</option>
                  <option value="Without Pay">Without Pay Leave</option>
                </select>
              </div>
            </div>
            <div class="md:flex md:items-center mb-5">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3 flex space-x-5">
                <button
                  className="flex p-2 bg-green-400 rounded-md hover:border-4 hover:border-green-600 hover:bg-green-500 transition-all duration-300 w-fit font-bold"
                  type="submit"
                >
                  Save & Proceed
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
        
    </div>
  );
}
