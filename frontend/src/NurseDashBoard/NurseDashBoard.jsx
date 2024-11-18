import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppointmentDetails } from "../features/appointmentSlice";

function NurseDashBoard() {
    const dispatch = useDispatch();
    const appointmentDetails = useSelector((state) => state.appointment);

    
    const [isAccepted, setIsAccepted] = useState(false);

    const handleAccept = () => {
        
        dispatch(setAppointmentDetails({ ...appointmentDetails, status: "Accepted" }));
        setIsAccepted(true); 
    };

    const handleRedirect = () => {
        window.location.href = "http://localhost:5000";
    };

    const handleReject = () => {
        
        dispatch(setAppointmentDetails({ ...appointmentDetails, status: "Rejected" }));
        setIsAccepted(false); 
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Nurse Dashboard</h1>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold">Appointment Details</h2>
                <p><strong>Name:</strong> {appointmentDetails.name}</p>
                <p><strong>Email:</strong> {appointmentDetails.email}</p>
                <p><strong>Phone:</strong> {appointmentDetails.phone}</p>
                <p><strong>Date:</strong> {appointmentDetails.date}</p>
                <p><strong>Time:</strong> {appointmentDetails.time}</p>
                <p><strong>Aadhar:</strong> {appointmentDetails.adhar}</p>
                <p><strong>Status:</strong> {appointmentDetails.status}</p>

                <div className="flex justify-between mt-4">
                    <button
                        onClick={handleAccept}
                        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                    >
                        Accept
                    </button>
                    <button
                        onClick={handleReject}
                        className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                    >
                        Reject
                    </button>
                </div>
            </div>
            {isAccepted && (
                <div className="mt-8">
                    <h1>Redirect to See Real-time Location</h1>
                    <button
                        className="border bg-violet-600 p-3 rounded-lg"
                        onClick={handleRedirect}
                    >
                        View Location
                    </button>
                </div>
            )}
        </div>
    );
}

export default NurseDashBoard;
