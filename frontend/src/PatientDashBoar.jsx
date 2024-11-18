import React, { useState } from 'react';
import Data from "./data.json";
import Ambe from "./ambegaon.json";
import baner from "./baner.json";
import hinj from "./hinjewadi.json";
import junnar from "./junnar.json";
import kore from "./koregaon.json";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAppointmentDetails } from './features/appointmentSlice'; 

function UserDashBoard() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [adhar, setAdhar] = useState("");
    const { id } = useParams(); 
    const dispatch = useDispatch();

    
    const allNurses = [...Data, ...Ambe, ...baner, ...hinj, ...junnar, ...kore];

    
    const nurse = allNurses.find((nurse) => nurse.id === parseInt(id));

    if (!nurse) {
        return <h1 className="text-center text-xl">Nurse not found</h1>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form data:", { name, email, phone, date, time, adhar }); // Log form data
    
        
        dispatch(setAppointmentDetails({
            name,
            email,
            phone,
            date,
            time,
            adhar,
        }));
    
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setTime("");
        setAdhar("");
        alert("form submitted");
    };

    const handleContinue = () => {
        navigate("/geo");
    }
    

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">
                Details for Nurse Name: {nurse.first_name}
            </h1>
            <div className='flex'>
                
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
                    <div className='h-[300px] w-[500px] object-cover rounded-lg'>
                        <img className='h-[100%] w-[100%] object-cover rounded-lg' src={nurse.image} alt="image" />
                    </div>
                    <p><strong>Address:</strong> {nurse.address}</p>
                    <p><strong>First Name:</strong> {nurse.first_name}</p>
                    <p><strong>Last Name:</strong> {nurse.last_name}</p>
                    <p><strong>Email:</strong> {nurse.email}</p>
                    <p><strong>Gender:</strong> {nurse.gender}</p>
                    <p><strong>Speciality:</strong> {nurse.job_title}</p>
                </div>

                
                <div>
                    <div className="min-h-screen flex items-center justify-center bg-gray-100">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                            <h2 className="text-3xl font-bold text-center text-purple-900">Request Home Appointment</h2>
                            <form onSubmit={handleSubmit}>
                                
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="Number"
                                        id="tel"
                                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>

                                
                                <div className="mb-4">
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                </div>

                                
                                <div className="mb-4">
                                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                                        Preferred Time
                                    </label>
                                    <input
                                        type="time"
                                        id="time"
                                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        required
                                    />
                                </div>

                                
                                <div className="mb-4">
                                    <label htmlFor="adhar" className="block text-sm font-medium text-gray-700">
                                        Aadhar Number
                                    </label>
                                    <input
                                        type="text"
                                        id="adhar"
                                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Enter your Aadhar Number"
                                        value={adhar}
                                        onChange={(e) => setAdhar(e.target.value)}
                                        required
                                    />
                                </div>

                                <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                                    Submit Request
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleContinue} className='border p-3 bg-violet-500 items-center justify-center rounded-lg'>
                Continue for Location
            </button>
        </div>
    );
}

export default UserDashBoard;
