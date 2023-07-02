import { toast } from "@mobiscroll/react";
import React, { useEffect } from "react";
import axios from "axios";

export default function QT_Edit(props) {
  const [qtform, setqt] = React.useState({});
  const [obj, setObject] = React.useState({});

  async function fetchProf() {
    await axios.get("/api/fetchProfile").then((result) => {
      setqt(result);
    });
  }

  async function handleSubmit() {
   
    await axios.get("/api/fetchProfile").then((result) => {
      const r = { ...result, qt: qtform };
      setObject(r);
    });
    
      await axios.post("/api/addProfile", obj)
      .then(() => {
        toast({
          message: "Update Successfully",
          color: "success",
        });
      })
     
  }
  useEffect(() => {
    fetchProf();
  }, []);

  const ListStyle = {
    webkitappearance: "none",
    mozappearance: "none",
    appearance: "none",
  };

  return (
    <div>
      <div class="flex-col justify-center h-full">
        <div class="max-w-2xl bg-white shadow-lg rounded-lg border border-gray-200 mx-auto">
          <form class="max-w-2xl py-3 px-5 space-y-4" id="formId">
            <header class="py-1 border-b-2 border-gray-500">
              <h2 class="font-bold text-gray-800 text-2xl">Personal Details</h2>
            </header>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                  Name
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  name="name"
                  class="bg-gray-100 text-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black h-10"
                  type="text"
                  placeholder={qtform.name}
                  onChange={(e) => {
                    setqt((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                    console.log(qtform);
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center" name="date">
              <div class="md:w-1/3">
                <label class="block text-gray-900 font-bold md:text-left mb-1 text-lg md:mb-0">
                  Designation
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  name="title"
                  class="bg-gray-100 text-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black h-10"
                  type="text"
                  placeholder={qtform.designation}
                  onChange={(e) => {
                    setqt((prev) => ({
                      ...prev,
                      designation: e.target.value,
                    }));
                    console.log(qtform);
                  }}
                />
              </div>
            </div>

            <div class="md:flex md:items-center" name="date">
              <div class="md:w-1/3">
                <label class="block text-gray-900 font-bold md:text-left mb-1 pl-1 text-lg md:mb-0">
                  Email
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  name="title"
                  class="bg-gray-100 text-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black h-10"
                  type="email"
                  placeholder={qtform.email}
                  onChange={(e) => {
                    setqt((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                    console.log(qtform);
                  }}
                />
              </div>
            </div>
            <header class="py-1 border-b-2 border-gray-500">
              <h2 class="font-bold mt-3 text-gray-800 text-2xl">
                Qualifications
              </h2>
            </header>
            <div class="md:flex md:items-center" name="date">
              <div class="md:w-1/3">
                <label class="block text-gray-900 font-bold md:text-left mb-1 text-lg md:mb-0">
                  Under Graduation
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  name="title"
                  class="bg-gray-100 text-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black h-10"
                  type="text"
                  placeholder={qtform.UG}
                  onChange={(e) => {
                    setqt((prev) => ({
                      ...prev,
                      UG: e.target.value,
                    }));
                    console.log(qtform);
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center" name="date">
              <div class="md:w-1/3">
                <label class="block text-gray-900 font-bold md:text-left mb-1 text-lg md:mb-0">
                  Post Graduation
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  name="title"
                  class="bg-gray-100 text-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black h-10"
                  type="text"
                  placeholder={qtform.PG}
                  onChange={(e) => {
                    setqt((prev) => ({
                      ...prev,
                      PG: e.target.value,
                    }));
                    console.log(qtform);
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center" name="date">
              <div class="md:w-1/3">
                <label class="block text-gray-900 font-bold md:text-left mb-1 text-lg md:mb-0">
                  Phd
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  name="title"
                  class="bg-gray-100 text-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black h-10"
                  type="text"
                  placeholder={qtform.PhD}
                  onChange={(e) => {
                    setqt((prev) => ({
                      ...prev,
                      PhD: e.target.value,
                    }));
                    console.log(qtform);
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center" name="date">
              <div class="md:w-1/3">
                <label class="block text-gray-900 font-bold md:text-left mb-1 text-lg md:mb-0">
                  Teaching Experience
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  name="title"
                  class="bg-gray-100 text-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black h-10"
                  type="number"
                  placeholder={qtform.exp}
                  onChange={(e) => {
                    setqt((prev) => ({
                      ...prev,
                      exp: Number(e.target.value),
                    }));
                    console.log(qtform);
                  }}
                />
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  className="flex p-2 bg-green-400 rounded-md hover:border-4 hover:border-green-600 hover:bg-green-500 transition-all duration-300 w-fit font-bold"
                  onClick={(e)=>{
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
