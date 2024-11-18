import React from "react";
import { useSelector } from "react-redux";
import NurseDashBoard from "./NurseDashBoard/NurseDashBoard";

function ParentComponent() {
  
  const appointmentDetails = useSelector((state) => state.appointment.appointmentDetails);

  return (
    <div>
      
      <NurseDashBoard appointmentDetails={appointmentDetails} />
    </div>
  );
}

export default ParentComponent;
