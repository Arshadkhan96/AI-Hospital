import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SymptomChecker from './pages/SymptomChecker';
import Appointments from './pages/Appointments';
import ChatBot from './components/ChatBot';
import SignUpForm from './components/RegisterForm';
import EmergencyButton from './components/EmergencyButton';
import HelpDesk from './pages/HelpDesk';
import Feedback from './pages/Feedback';
import HealthAnalytics from './pages/HealthAnalytics';
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
            <Route path="/chat" element={<ChatBot />} />
            {/* <Route path='/signUp' element={<SignUpForm/>}/> */}
            <Route path="/help-desk" element={<HelpDesk />} /> {/* Add this line */}
            <Route path="/feedback" element={<Feedback />} /> {/* Add this line */}
            <Route path="/health-analytics" element={<HealthAnalytics/>}/>
            
          </Routes>
        </main>
        <ChatBot />
        <EmergencyButton/>
      </div>
    </Router>
  );
}

export default App;