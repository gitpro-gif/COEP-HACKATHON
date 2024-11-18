import React from "react";

const Geolocation = () => {
  
  const handleRedirect = () => {
    
    window.location.href = "http://localhost:5000";
  };

  return (
    <div className="mb-[700px]">
      <h1>Redirect to See Real time Location</h1>
      
      <button className=" border bg-violet-600 p-3 rounded-lg" onClick={handleRedirect}>
        View Location
      </button>
    </div>
  );
};

export default Geolocation;
