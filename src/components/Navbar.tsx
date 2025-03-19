import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Home, Layout, Activity, Calendar } from 'lucide-react';
import ChatBot from './ChatBot';
import LoginForm from './LoginForm';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">MedAI Care</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <NavLink to="/" icon={<Home className="h-5 w-5" />} text="Home" />
              <NavLink to="/dashboard" icon={<Layout className="h-5 w-5" />} text="Dashboard" />
              <NavLink to="/symptom-checker" icon={<Activity className="h-5 w-5" />} text="Symptom Checker" />
              <NavLink to="/appointments" icon={<Calendar className="h-5 w-5" />} text="Appointments" />
              <NavLink to="/chatbot" icon={<ChatBot />} text="Chatbot" />
            </div>
            
            <button 
              onClick={() => setShowLogin(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;