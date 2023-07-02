import axios from "axios"
import React from "react"
import { toast } from "@mobiscroll/react"

export default function JobCardForm() {

    const [formData,setFormdata] = React.useState(
        {
            dept : "",
            title : "",
            description : ""
        }
    )

    function handleChange(event)
    {
        const {name,value} = event.target
        setFormdata(prevformData => {
            return {
                ...prevformData,
                [name] : value
            }
        })
    } 

    const ListStyle = {
        webkitappearance: 'none',
        mozappearance: 'none',
        appearance: 'none',
    }

    function handleSubmit(event)
    {
        event.preventDefault()
        
        axios.post('/api/addJobCard', formData).then(()=>{
            toast({
                message:"Job Card Added Successfully",
                color:'success'
            })
        }).catch((error)=>{
            console.log(error)
            toast({
                message:"An Error Occured",
                color:'danger'
            })
        })
    }

    return (
        <div>
            <div class="flex-col justify-center h-full pt-2">
                <div class="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg border-2 border-gray-200">
                    <form class="w-full max-w-lg py-5 px-5" id="formId" onSubmit={handleSubmit}> 
                        <div class="md:flex md:items-center mb-5">
                            <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-left text-lg mb-1 md:mb-0">
                                    To
                                </label>
                            </div>
                            <div class="md:w-2/3 bg-gray-200 flex rounded h-12 ">
                                    <select name="dept" 
                                    value={formData.dept} 
                                    class="bg-gray-200 rounded py-2 w-full p-2.5 h-full text-lg" 
                                    style={ListStyle} 
                                    required
                                    onChange={handleChange}
                                    >
                                        <option value="" disabled hidden></option>
                                        <option value="Civil">Civil Department</option>
                                        <option value="Mechanical">Mechanical Department</option>
                                        <option value="Electrical Department">Electrical Department</option>
                                        <option value="EC Department">EC Department</option>
                                        <option value="Production Department">Producion Department</option>
                                        <option value="Electronics Department">Electronics Department</option>
                                        <option value="IT Department">IT Department</option>
                                    </select>
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-5" name="date">
                            <div class="md:w-1/3">
                                <label class="block text-gray-500 font-bold md:text-left mb-1 text-lg md:mb-0">
                                    Title
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input name="title" 
                                class="bg-gray-200 text-lg appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black h-12" 
                                type="text" 
                                required
                                onChange={handleChange} 
                                value = {formData.title}
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
                                <textarea name="description" rows="4" 
                                class=" text-lg bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" 
                                onChange={handleChange}
                                required
                                value = {formData.description}
                                />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-5">
                            <div class="md:w-1/3"></div>
                            <div class="md:w-2/3 flex space-x-5">
                                <button className="flex p-2 bg-green-400 rounded-md hover:border-4 hover:border-green-600 hover:bg-green-500 transition-all duration-300 w-fit font-bold" type="submit">Save & Proceed</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}