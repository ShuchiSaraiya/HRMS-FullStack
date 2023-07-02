import React from "react";

export default function QT(props) {
    return (
        <div>
            <div class="flex-col justify-center h-full">
                <div class="w-full max-w-2xl mx-auto shadow-lg rounded-lg border border-gray-200 bg-gray-100">
                    <header class="px-5 py-4 border-b-2 border-gray-300">
                        <h2 class="font-bold text-gray-800 px-2 text-xl">Qualification</h2>
                    </header>
                    <div class="p-3">
                        <div class=" overflow-x-auto flex h-auto">
                            <div class="space-y-5 mx-11 text-lg m-auto w-8/12">
                                <div><span class="inline-block w-8/12 font-bold">Under Graduation</span><span class="inline-block w-11/12">{props.data.UG}</span></div>
                                {
                                    props.data.PG !== "NA" &&
                                    <div><span class="inline-block w-8/12 font-bold">Post Graduation</span><span class="inline-block w-11/12">{props.data.PG}</span></div>
                                }
                                {
                                    props.data.PhD !== "NA" &&
                                    <div><span class="inline-block w-8/12 font-bold">PhD</span><span class="inline-block w-11/12">{props.data.PhD}</span></div>
                                }
                                <div><span class="inline-block w-8/12 font-bold">Teaching Experience</span><span class="inline-block w-11/12">{props.data.exp} Years</span></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-col justify-center h-full mt-3">
                <div class="w-full max-w-2xl mx-auto shadow-lg rounded-lg border border-gray-200 bg-gray-100">
                    <header class="px-5 py-4 border-b-2 border-gray-300">
                        <h2 class="font-bold text-gray-800 px-2 text-xl">Personal Details</h2>
                    </header>
                    <div class="p-3">
                        <div class="overflow-x-auto flex h-auto">
                            <div class="space-y-5 mx-11 text-lg m-auto w-7/12">
                                <div><span class="inline-block w-8/12 font-bold">Name</span><span class="inline-block w-11/12">{props.data.name}</span></div>
                                <div><span class="inline-block w-8/12 font-bold">Designation</span><span class="inline-block w-11/12">{props.data.designation}</span></div>
                                <div><span class="inline-block w-8/12 font-bold">Departement</span><span class="inline-block w-11/12">{props.data.designation}</span></div>
                                <div><span class="inline-block w-8/12 font-bold">Email id</span><span class="inline-block w-11/12 overflow-x-auto overflow-hidden">{props.data.email}</span></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}