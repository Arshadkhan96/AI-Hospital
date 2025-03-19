import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SymptomChecker from './pages/SymptomChecker';
import Appointments from './pages/Appointments';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
            <Route path="/appointments" element={<Appointments />} />
          </Routes>
        </main>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;