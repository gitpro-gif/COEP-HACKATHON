import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import Data from "./data.json";
import Ambe from "./ambegaon.json";
import baner from "./baner.json";
import hinj from "./hinjewadi.json";
import junnar from "./junnar.json";
import kore from "./koregaon.json";


const Home = () => {
    const [data, setData] = useState(Data);
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value; 

        switch (selectedValue) {
            case "1":
                setData(Data);
                break;
            case "2":
                setData(Ambe);
                break;
            case "3":
                setData(baner);
                break;
            case "4":
                setData(hinj);
                break;
            case "5":
                setData(junnar);
                break;
            case "6":
                setData(kore);
                break;
            default:
                setData(Data); 
        }
    };

    const handleRowClick = (nurseId) => {
        navigate(`/page/${nurseId}`);
    }

    return (
        <>
            <div className='flex'>
               
                <div className='h-[100vh] w-[20%] bg-black rounded-lg shadow-lg flex flex-col items-center p-5'>
                    
                    <h1 className='text-white mt-3 text-5xl font-bold font-poppins'>Medexto</h1>

                   
                    <nav className='mt-10 space-y-5 font-poppins'>
                        <h2 className='text-[#9A8FE1] text-3xl cursor-pointer flex items-center gap-2 transition duration-200 hover:text-white'>
                            <VscAccount className='text-[#9A8FE1] text-3xl' /> Profile
                        </h2>
                        <h2 onClick={() => navigate("/")} className='text-[#9A8FE1] text-3xl cursor-pointer flex items-center gap-2 transition duration-200 hover:text-white'>
                            <IoHomeOutline className='text-[#9A8FE1] text-3xl'  /> Home
                        </h2>
                        <h2 onClick={() => navigate("/msg")} className='text-[#9A8FE1] text-3xl cursor-pointer flex items-center gap-2 transition duration-200 hover:text-white'>
                            <FaRegMessage className='text-[#9A8FE1] text-3xl' onClick={() => navigate("/msg")} /> Message
                        </h2>
                        <h2 className='text-[#9A8FE1] text-3xl cursor-pointer flex items-center gap-2 transition duration-200 hover:text-white'>
                            <IoIosNotificationsOutline className='text-[#9A8FE1] text-3xl' /> Notifications
                        </h2>
                        <h2 className='text-[#9A8FE1] text-3xl cursor-pointer flex items-center gap-2 transition duration-200 hover:text-white'>
                            <IoSettingsOutline className='text-[#9A8FE1] text-3xl' /> Settings
                        </h2>
                        <h2 className='text-[#9A8FE1] text-3xl cursor-pointer flex items-center gap-2 transition duration-200 hover:text-white'>
                            <FcAbout className='text-[#9A8FE1] text-3xl' /> About
                        </h2>
                    </nav>
                </div>

                
                <div className='h-[100vh] w-[80%] bg-white rounded-lg shadow-lg p-5 flex flex-col'>
                    
                    <form>
                        <div className="flex flex-col space-y-4">
                            <div className="flex space-x-4">
                                
                                <div className="flex flex-col w-1/3">
                                    <label className="mb-1 text-gray-700">Location</label>
                                    <div className="relative">
                                        <FaLocationDot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600 z-10" />
                                        <select
                                            id="location-select"
                                            onChange={handleSelectChange}
                                            className="border border-gray-300 rounded-lg pl-10 pr-3 py-2 appearance-none focus:outline-none w-full"
                                        >
                                            <option value="1">Pune</option>
                                            <option value="2">Ambegaon</option>
                                            <option value="3">Baner</option>
                                            <option value="4">Hinjewadi</option>
                                            <option value="5">Junnar</option>
                                            <option value="6">Koregaon</option>
                                        </select>
                                    </div>
                                </div>

                                
                                <div className="flex flex-col w-1/3">
                                    <label className="mb-1 text-gray-700">Select Area</label>
                                    <div className="relative">
                                        <FaLocationDot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600 z-10" />
                                        <select
                                            id="area-select"
                                            onChange={handleSelectChange}
                                            className="border border-gray-300 rounded-lg pl-10 pr-3 py-2 appearance-none focus:outline-none w-full"
                                        >
                                            <option value="1">Pune</option>
                                            <option value="2">Ambegaon</option>
                                            <option value="3">Baner</option>
                                            <option value="4">Hinjewadi</option>
                                            <option value="5">Junnar</option>
                                            <option value="6">Koregaon</option>
                                        </select>
                                    </div>
                                </div>

                                
                                
                            </div>
                        </div>
                    </form>

                    
                    <h1 className='text-2xl'>Nurse Data:</h1>
                    <div className='w-full h-[600px] border rounded-lg overflow-hidden'>
                        <div className="overflow-y-auto h-full">
                        <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg">
            <thead>
                <tr className="bg-gray-100">
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">ID</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">First Name</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Last Name</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Email</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Gender</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Job Title</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((nurse, index) => (
                    <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        onClick={() => handleRowClick(nurse.id)} 
                    >
                        <td className="px-4 py-2 border border-gray-300 text-sm hover:underline">{nurse.id}</td>
                        <td className="px-4 py-2 border border-gray-300 text-sm">{nurse.first_name}</td>
                        <td className="px-4 py-2 border border-gray-300 text-sm">{nurse.last_name}</td>
                        <td className="px-4 py-2 border border-gray-300 text-sm">{nurse.email}</td>
                        <td className="px-4 py-2 border border-gray-300 text-sm">{nurse.gender}</td>
                        <td className="px-4 py-2 border border-gray-300 text-sm">{nurse.job_title}</td>
                        <td className="px-4 py-2 border border-gray-300 text-sm">
                            <button
                                className='border rounded-lg bg-blue-400 text-white p-2'
                                onClick={(e) => {
                                    e.stopPropagation(); 
                                    handleRowClick(nurse.id); 
                                }}
                            >
                                Details
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
