import React from "react";

export default function MoreInfo(props) {
    return (
        <div class="flex-col justify-center h-full">
            <div class="w-full max-w-2xl mx-auto bg-gray-100 shadow-lg rounded-lg border border-gray-200">
                <header class="px-5 py-4 border-b-2 border-gray-300">
                    <h2 class="font-bold text-gray-800 text-xl">Additional Info</h2>
                </header>
                <div class="p-3">
                    <div class="overflow-x-auto">
                        <div class="flex">
                            {(props.data.project.master !== 0 || props.data.project.phd !== 0) &&
                                <div class="space-x-2 px-10 text-lg h-auto ">
                                    <div class="px-4 font-bold">PhDs/Project Guided</div>
                                    <div class="p-2  space-y-3">
                                        <div>Projects at Master Level : <span class="p-2">{props.data.project.master}</span></div>
                                        <div>PhDs : <span class="p-2">{props.data.project.phd}</span></div>
                                    </div>
                                </div>
                            }
                        </div>
                        {props.data.awards.length !== 0 &&
                            <div class="text-lg space-x-2 px-5">
                                <div class="font-bold px-8 py-4">Awards</div>
                                <ol class="px-10 space-y-2 list-disc overflow-y-auto h-16 scrollbar-hide">
                                    {props.data.awards.map(award => <li>{award}</li>)}
                                </ol>
                            </div>
                        }
                        {props.data.grants.length !== 0 &&
                            <div class="text-lg space-x-2 px-5 py-2">
                                <div class="font-bold px-8 py-4">Grant fetched</div>
                                <ol class="px-10 space-y-2 list-disc overflow-y-auto h-24 scrollbar-hide">
                                    {props.data.grants.map(grant => <li>{grant}</li>)}
                                </ol>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}