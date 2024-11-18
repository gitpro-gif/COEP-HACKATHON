import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/login");
  }
  return (
    <div className="min-h-screen bg-gray-50">
     
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-blue-700">Medexto+</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-700 hover:text-blue-700">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-700">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700">Contact</a>
          </nav>
          <button className="md:hidden text-gray-700">☰</button>
        </div>
      </header>

      
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-4">Your Health, Our Priority</h1>
            <p className="mb-6 text-lg">
              Providing quality healthcare services tailored to your needs. Let us take care of your health with personalized treatment plans.
            </p>
            <button className="border bg-white text-blue-500 p-3 rounded-lg bold" onClick={handleclick}>
              Explore Our Services
            </button>
          </div>
          <div className="md:w-1/2">
            
          </div>
        </div>
      </section>

    
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Home Services
                </h3>
                <p className="text-gray-700 mb-6">
                  Comprehensive primary care services to keep you and your family healthy.
                </p>
                <a href="#" className="text-blue-700 hover:text-blue-500">
                  Learn More →
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Specialized Care
                </h3>
                <p className="text-gray-700 mb-6">
                  Specialized care from experienced professionals in various fields.
                </p>
                <a href="#" className="text-blue-700 hover:text-blue-500">
                  Learn More →
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Health Care Test
                </h3>
                <p className="text-gray-700 mb-6">
                  Consult with doctors online from the comfort of your home.
                </p>
                <a href="#" className="text-blue-700 hover:text-blue-500">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="mb-8">
            Have any questions or want to book an appointment? Get in touch with us.
          </p>
          <a
            href="tel:+123456789"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
          >
            Call Us Now
          </a>
        </div>
      </section>

     
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 HealthCare+. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
