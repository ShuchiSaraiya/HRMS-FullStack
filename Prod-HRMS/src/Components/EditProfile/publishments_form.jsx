import React, { Children, useState } from "react";

export default function Publishments_Edit(props) {
  const [pbform, setpub] = React.useState(props.data);
  // const [book,setbook] = React.useState(pbform.books.length);

  const [books, setBooks] = useState(props.data.books);
  const [publish, setPublish] = useState(props.data.publish);
  const [presented, setPresented] = useState(props.data.present);

  // function add() {
  //     let obj = document.createElement("input");
  //     obj.type = "text";
  //     obj.style.width = "92%";
  //     obj.style.padding = "4px";
  //     obj.style.borderStyle = "solid";
  //     obj.style.borderColor = "#e5e7eb";
  //     obj.style.borderWidth = "2px";
  //     obj.style.marginLeft = "4px";
  //     obj.style.marginBottom = "1px";
  //     obj.style.borderRadius = "3px";
  //     obj.style.backgroundColor = "#f3f4f6";
  //     obj.addEventListener("focusin", () => { obj.style.backgroundColor = "white" })
  //     obj.addEventListener("focusout", () => { obj.style.backgroundColor = "#f3f4f6" })
  //     document.getElementById("Richa").appendChild(obj);
  //     setbook(prevbook => prevbook + 1)
  // }

//   const addFields = (e) => {
//     e.preventDefault();
//     let object = "";
//     setBooks([...books, object]);
//     console.log(books);
//   };

  //   const removeFields = (index) => {
  //     let data = [...books];
  //     data.splice(index, 1);
  //     setQualification(data);
  //   };

  const Booklist = {
    height: books > 1 ? "98px" : "62px",
  };

  return (
    <div>
      <div class="flex-col justify-center h-full">
        <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg border border-gray-200 mx-auto">
          <form class="w-full max-w-2xl py-3 px-5" id="formId">
            <header class="py-1 mb-4 border-b-2 border-gray-500">
              <h2 class="font-bold text-gray-800 text-2xl">Publishments</h2>
            </header>
            <div class="md:flex md:items-center mb-5">
              <div>
                <label className="text-xl font-bold">Paper Published</label>
                <div class="space-y-3 mx-12 my-4 text-lg">
                  <li class="space-x-32">
                    <label>National</label>
                    <input
                      name="pubn"
                      type="number"
                      placeholder={pbform.publish.n}
                      onChange={(e) => {
                        setPublish((prev) => ({
                          ...prev,
                          n: Number(e.target.value),
                        }));
                        console.log(publish);
                      }}
                      className="p-1 px-3 w-6/12 bg-gray-100 border-2 border-gray-200 rounded focus:bg-white"
                      
                    />
                  </li>
                  <li class="space-x-24">
                    <label>International</label>
                    <input
                      name="pubin"
                      type="number"
                      placeholder={pbform.publish.in}
                      onChange={(e) => {
                        setPublish((prev) => ({
                          ...prev,
                          in: Number(e.target.value),
                        }));
                        console.log(publish);
                      }}
                      className="p-1 w-6/12 px-3 bg-gray-100 border-2 border-gray-200 rounded focus:bg-white"
                      
                    />
                  </li>
                </div>
              </div>
            </div>
            <div class="md:flex md:items-center mb-5" name="date">
              <div>
                <label className="text-xl font-bold">Paper Presented</label>
                <div class="space-y-3 mx-12 my-4 text-lg">
                  <li class="space-x-32">
                    <label>National</label>
                    <input
                      name="pubn"
                      type="number"
                      placeholder={pbform.present.n}
                      onChange={(e) => {
                        setPresented((prev) => ({
                          ...prev,
                          n: Number(e.target.value),
                        }));
                        console.log(presented);
                      }}
                      className="p-1 px-3 w-6/12 bg-gray-100 border-2 border-gray-200 rounded focus:bg-white"
                      
                    />
                  </li>
                  <li class="space-x-24">
                    <label>International</label>
                    <input
                      name="pubin"
                      type="number"
                      placeholder={pbform.present.in}
                      onChange={
                        (e) => {
                            setPresented((prev) => ({
                              ...prev,
                              in: Number(e.target.value),
                            }));
                            console.log(presented);
                          }
                      }
                      className="p-1 px-3 w-6/12 bg-gray-100 border-2 border-gray-200 rounded focus:bg-white"
                      
                    />
                  </li>
                </div>
              </div>
            </div>

            {/* <div class="mb-5" name="date">
              <div class="space-y-2 text-lg">
                <label className="text-xl font-bold">
                  Books published/IPRs/Patents
                </label>
                <div class="space-y-2 overflow-y-auto pr-2" id="Richa">
                  {books.map((form, index) => (
                    <input
                      type="text"
                      placeholder={books[index]}
                      onChange={(e) => {
                        setBooks(() => {
                          [...books, e.target.value];
                          // console.log(books[index])
                        });
                      }}
                      className="w-full mt-1 px-4 p-1 bg-gray-100 border-2 border-gray-200 rounded focus:bg-white"
                    />
                  ))}
                </div>
                <button
                  className="w-xl p-1 mr-2 text-sm space-x-1.5 flex font-bold float-right rounded-md dark:bg-blue-300 dark:text-gray-900 hover:border-2 hover:border-blue-400"
                  onClick={addFields}
                >
                  <label class="text-sm">Add</label>
                </button>
                
              </div>
            </div> */}

            <div>
              <div class="mt-9">
                <button
                  className="flex p-2 bg-green-400 rounded-md hover:border-4 hover:border-green-600 hover:bg-green-500 transition-all duration-300 w-fit font-bold"
                  type="submit"
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
