import { List } from "@mui/material";
import React from "react";

export default function Publishments(props) {
    return (
        <div class="flex-col justify-center h-full">
            <div class="w-full max-w-2xl mx-auto shadow-lg rounded-lg border border-gray-200 bg-gray-100">
                <header class="px-4 py-4 border-b-2 border-gray-300">
                    <h2 class="font-bold text-gray-800 text-xl">Publishments</h2>
                </header>
                <div class="p-3">
                    <div class="overflow-x-auto px-2">
                        <div class=" flex space-x-20">
                            {
                                (props.data.publish.n !== 0 && props.data.publish.in !== 0 ||
                                    props.data.present.n !== 0 && props.data.present.in !== 0) &&
                                <div class="space-y-5 mx-8">
                                    {(props.data.publish.n !== 0 || props.data.publish.in !== 0) &&
                                        <div class="space-x-2 text-lg h-auto">
                                            <div class="p-2 font-bold">Papers Published</div>
                                            <div>
                                                <div>National : <span class="p-2">{props.data.publish.n}</span></div>
                                                <div>International : <span class="p-2">{props.data.publish.in}</span></div>
                                            </div>
                                        </div>
                                    }
                                    {(props.data.present.n !== 0 || props.data.present.in !== 0) &&
                                        <div class="space-x-2 text-lg h-auto">
                                            <div class="p-2 font-bold">Papers Presented</div>
                                            <div>
                                                <div>National : <span class="p-2">{props.data.present.n}</span></div>
                                                <div>International : <span class="p-2">{props.data.present.in}</span></div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                        {props.data.books.length !== 0 &&
                            <div class="text-lg space-x-2 px-2.5 py-2">
                                <div class="font-bold px-8 py-4">Books published/IPRs/Patents</div>
                                <ol class="px-10 space-y-2 list-disc overflow-y-auto h-24 scrollbar-hide">
                                    {props.data.books.map(book => <li>{book}</li>)}
                                </ol>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}