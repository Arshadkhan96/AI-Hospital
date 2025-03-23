import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Home,
  Layout,
  Activity,
  Calendar,
  Mail,
  MessageCircle,
} from 'lucide-react'; // Import all required icons
import LoginForm from './LoginForm';
import SignUpForm from './RegisterForm';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

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
              {/* <NavLink to="/help-desk" icon={<Mail className="h-5 w-5" />} text="Help Desk" /> */}
              <NavLink to="/feedback" icon={<MessageCircle className="h-5 w-5" />} text="Feedback" />
              {/* <NavLink to="/health-analytics" icon={<HealthAnalytics className="h-5 w-5" />} text="Health Analytics" /> */}
            </div>

            <div className="space-x-4">
              <button
                onClick={() => setShowLogin(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
              <button
                onClick={() => setShowSignUp(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}
    </>
  );
};

const NavLink = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition">
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;