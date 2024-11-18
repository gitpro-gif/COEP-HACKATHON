import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === 'test@example.com' && password === 'password123') {
      alert('Login successful!');
      navigate('/home');
    }
    else if(email === "Nurse@example.com" && password === 'password123') {
      alert("Login successfull!");
      navigate('/ndash');
    }
      
    else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-900">Login to NurseBooking</h2>

        
        <form onSubmit={handleLogin}>
          
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

          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-purple-800 transition"
          >
            Login
          </button>
        </form>

        
        <div className="mt-6 text-center">
          <Link to="/forgot-password" className="text-sm text-purple-600 hover:underline">
            Forgot Password?
          </Link>
          <p className="mt-4 text-sm">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-purple-600 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
