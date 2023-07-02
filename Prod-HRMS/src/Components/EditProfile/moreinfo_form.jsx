import React from "react";

export default function MoreInfo_Edit(props) {
  const [infoform, setinfo] = React.useState(props.data);

  const [proj, setProject] = React.useState(props.data.project);

  // function add(id) {
  //     let obj = document.createElement("input");
  //     obj.type = "text";
  //     obj.style.width = "100%";
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

  //     if (id === "award") {
  //         document.getElementById("Richa").appendChild(obj);
  //         setaward(prevaward => prevaward + 1)
  //     }
  //     else {
  //         document.getElementById("mikasa").appendChild(obj);
  //         setgrant(prevgrant => prevgrant + 1)
  //     }
  // }

  // const richa = {
  //     height : (award > 1) ? '94px' : '62px'
  // }

  // const mikasa = {
  //     height : (grant > 1) ? '95px' : '62px'
  // }

  return (
    <div>
      <div class="flex-col justify-center h-full">
        <div class="w-full max-w-2xl bg-white shadow-lg rounded-lg border border-gray-200 mx-auto">
          <form class="w-full max-w-2xl py-3 px-5" id="formId">
            <header class="py-1 mb-4 border-b-2 border-gray-500">
              <h2 class="font-bold text-gray-800 text-2xl">Additional Info</h2>
            </header>
            <div class="md:flex md:items-center mb-5">
              <div>
                <label className="text-xl font-bold">PhDs/Project Guided</label>
                <div class="space-y-3 mx-12 my-4 text-lg">
                  <li class="space-x-10">
                    <label>Projects at Master Level</label>
                    <input
                      name="pubn"
                      type="number"
                      placeholder={infoform.project.master}
                      onChange={(e) => {
                        setProject((prev) => ({
                          ...prev,
                          master: Number(e.target.value),
                        }));
                        console.log(proj);
                      }}
                      className="p-1 px-3 w-5/12 bg-gray-100 border-2 border-gray-200 rounded focus:bg-white"
                      
                    />
                  </li>
                  <li class="space-x-48">
                    <label>PhDs</label>
                    <input
                      name="pubin"
                      type="number"
                      placeholder={infoform.project.phd}
                      onChange={(e) => {
                        setProject((prev) => ({
                          ...prev,
                          phd: Number(e.target.value),
                        }));
                        console.log(proj);
                      }}
                      className="p-1 px-3 w-5/12 bg-gray-100 border-2 border-gray-200 rounded focus:bg-white"
                      
                    />
                  </li>
                </div>
              </div>
            </div>
            {/* {infoform.awards.length !== 0 &&
                            <div class="mb-3" name="date">
                                <div class="space-y-2 text-lg">
                                    <label className="text-xl font-bold">Awards</label>
                                    <div class="space-y-2 overflow-y-auto pr-2" id="Richa" style={richa}>
                                        {infoform.awards.map(award => <input type="text" value={award} className="w-full mt-1 px-4 p-1 bg-gray-100 border-2 border-gray-200 rounded focus:bg-white" />)}
                                    </div>
                                    <button className="w-xl p-1 mr-2 text-sm space-x-1.5 flex font-bold float-right rounded-md dark:bg-blue-300 dark:text-gray-900 hover:border-2 hover:border-blue-400" onClick={() => add('award')}>
                                        <BiPlusCircle size={16} />
                                        <label class="">Add</label>
                                    </button>
                                </div>
                            </div>
                        }
                        {infoform.grants.length !== 0 &&
                            <div class="mt-5" name="date">
                                <div class="space-y-2 text-lg pt-4">
                                    <label className="text-xl font-bold">Grant Fetched</label>
                                    <div class="space-y-2 overflow-y-auto pr-2" id="mikasa" style={mikasa}>
                                        {infoform.grants.map(grant => <input type="text" value={grant} className="w-full mt-1 px-4 p-1 bg-gray-100 border-2 border-gray-200 rounded focus:bg-white" />)}
                                    </div>
                                    <button className="w-xl p-1 mr-2 text-sm space-x-1.5 flex font-bold float-right rounded-md dark:bg-blue-300 dark:text-gray-900 hover:border-2 hover:border-blue-400" onClick={() => add('grant')}>
                                        <BiPlusCircle size={16} />
                                        <label class="">Add</label>
                                    </button>
                                </div>
                            </div>
                        }*/}
                        <div>
                            <div class="mt-9">
                                <button onClick={()=>{
                                    console.log();
                                }} className="flex p-2 bg-green-400 rounded-md hover:border-4 hover:border-green-600 hover:bg-green-500 transition-all duration-300 w-fit font-bold" type="submit">Save Changes</button>
                            </div>
                        </div> 
          </form>
        </div>
      </div>
    </div>
  );
}
