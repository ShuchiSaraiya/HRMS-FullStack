import React from "react";
import data from "./dataset";
import { HiPhoneIncoming } from "react-icons/Hi";
import { MdEmail } from "react-icons/Md";
import { AiFillLinkedin } from "react-icons/Ai";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Resume() {
  const [detail, setdetail] = React.useState(data);

  function convert() {
    const doc = document.getElementById("resume");
    html2canvas(doc, {
      allowTaint: true,
      useCORS: true,
    }).then((canvas) => {
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(canvas, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Resume.pdf");
    });
  }

  return (
    <div className="my-8 lg:w-7/12 md:w-10/12 mx-auto">
      <div
        className="grid grid-rows-5 bg-gradient-to-r from-gray-400 to-stone-400 shadow-2xl"
        id="resume"
      >
        <div className="grid grid-cols-5">
          <div class="col-span-5">
            <h1 className="text-center pt-10 text-3xl font-bold">
              {detail.qt.name}
            </h1>
            <hr className="w-full my-2 border-2 border-stone-700 rounded-full"></hr>
            <p class="ml-7 text-lg font-semibold text-center">
              As an entry-level teacher, I would like to leverage my extrovert
              and dynamic approach in teaching students. Guiding the students to
              encourage them to participate in constructive programs would be my
              aim as a teacher.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-6 row-span-4 mt-10 border-t-4 border-gray-700">
          <div className="bg-gray-200 shadow-lg col-span-2">
            <header class="bg-gray-400 w-9/12 rounded-r-full text-2xl font-bold text-center mt-2 p-1.5">
              Currently At
            </header>
            <div class="mx-4 space-y-3 my-4">
              <div>
                <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                  University / College
                </label>
                <p>
                  Birla Vishvakarma Mahavidhyalaya, Vidhyanagar, Anand, Gujarat
                </p>
              </div>
              <div>
                <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                  Department
                </label>
                <p>IT Department</p>
              </div>
              <div>
                <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                  Designation
                </label>
                <p>Assistant Professor</p>
              </div>
              <div>
                <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                  Date of Joining
                </label>
                <p>10/12/2003</p>
              </div>
            </div>
            <br></br>
            <header class="bg-gray-400 w-10/12 rounded-r-full text-2xl text-center font-bold p-1.5">
              Education Details
            </header>
            <div class="my-3">
              <div class="my-4 mx-4 space-y-4">
                <div class="">
                  <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                    Under Graduation
                  </label>
                  <p>{detail.qt.UG}</p>
                </div>
                <div class="">
                  <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                    Post Graduation
                  </label>
                  <p>{detail.qt.PG}</p>
                </div>
                <div class="">
                  <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                    Phd
                  </label>
                  <p>{detail.qt.PhD}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-400 shadow-lg col-span-4 space-y-7">
            <header class="bg-gray-600 w-8/12 rounded-r-full text-2xl text-white text-center mt-2 font-bold p-1.5">
              Publishments
            </header>
            <div class="m-4">
              <div>
                <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                  Books published/IPRs/Patents
                </label>
                <ol class="list-disc mx-8 mt-1">
                  <li>
                    Load Balancing by process migration in Distributed Operating
                    System
                  </li>
                  <li>
                    Load Balancing by process migration in Distributed Operating
                    System
                  </li>
                  <li>
                    Load Balancing by process migration in Distributed Operating
                    System
                  </li>
                </ol>
              </div>
              <div class="flex my-5">
                <div class="mx-1">
                  <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                    Paper Published
                  </label>
                  <ol class="list-disc mx-7 mt-1">
                    <li>
                      <label class="font-medium">National : </label>
                      {detail.pub.publish.n}
                    </li>
                    <li>
                      <label class="font-medium">International : </label>
                      {detail.pub.publish.in}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <header class="bg-gray-600 w-8/12 rounded-r-full text-2xl text-white text-center mt-4 font-bold p-1.5">
              Achivements
            </header>
            <div class="mx-4 my-2">
              <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                Awards
              </label>
              <ol class="list-disc mx-8 mt-1">
                <li>NPTEL Discipline STAR Award from Swayam</li>
                <li>Gaurav Purushkar Award from CVM</li>
                <li>Gaurav Purushkar Award from CVM</li>
              </ol>
            </div>
            <div class="mx-4 my-5">
              <label class="block text-gray-900 font-bold md:text-left text-lg mb-1 md:mb-0">
                Grant Fetched
              </label>
              <ol class="list-disc mx-8 mt-1">
                <li>AR/VR Lab Development from AICTE</li>
                <li>For conducting FDP on Cloud computing with AWS</li>
                <li>Supercomputer facility establishment from GUJCOST</li>
                <li>Prerna Smridhdhi Scheme from AICTE</li>
              </ol>
            </div>
            <header class="bg-gray-600 w-8/12 rounded-r-full text-2xl text-white text-center mt-4 font-bold p-1.5">
              Contact Details
            </header>
            <div class="m-4">
              <div class="my-4 space-y-2">
                <div class="pl-0.5 flex space-x-3">
                  <HiPhoneIncoming size={22} />
                  <p>+91 9173273434</p>
                </div>
                <div class="flex space-x-3">
                  <MdEmail size={25} />
                  <p>{detail.qt.email}</p>
                </div>
                <div class="flex space-x-3">
                  <AiFillLinkedin size={25} />
                  <p>LinkedIn userid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="w-xl p-2 text-md text-white font-bold mt-4 mx-1 uppercase rounded bg-blue-600 hover:bg-blue-500 hover:border-4 hover:border-blue-600"
        onClick={convert}
      >
        Download PDF
      </button>
    </div>
  );
}

export default Resume;
