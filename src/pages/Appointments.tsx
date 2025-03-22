import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const Appointments = () => {
  // List of appointments
  const appointments = [
    {
      doctor: "Dr. Sarah Johnson",
      specialty: "General Physician",
      date: "2024-03-15",
      time: "10:00 AM",
      status: "Confirmed",
      patient: "John Doe",
      symptoms: "Fever, cough, headache",
      history: "No significant medical history"
    },
    {
      doctor: "Dr. Michael Chen",
      specialty: "Cardiologist",
      date: "2024-03-18",
      time: "2:30 PM",
      status: "Pending",
      patient: "Jane Smith",
      symptoms: "Chest pain, shortness of breath",
      history: "High blood pressure"
    },
  ];

  // State to track selected appointment
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Pre-call health summary component
  const PreCallSummary = ({ patientName, symptoms, history }) => (
    <div className="bg-gray-50 rounded-lg p-4 mt-4">
      <h3 className="text-lg font-semibold mb-2">Patient Details</h3>
      <div className="space-y-2">
        <p><strong>Patient:</strong> {patientName}</p>
        <p><strong>Symptoms:</strong> {symptoms}</p>
        <p><strong>Medical History:</strong> {history}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
        <p className="text-gray-600 mt-2">Schedule and manage your medical appointments</p>
      </header>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 hover:border-blue-500 transition cursor-pointer"
              onClick={() => setSelectedAppointment(appointment)} // Select appointment on click
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold">{appointment.doctor}</span>
                  </div>
                  <div className="text-gray-600">{appointment.specialty}</div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                  appointment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {appointment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAppointment && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <PreCallSummary
            patientName={selectedAppointment.patient}
            symptoms={selectedAppointment.symptoms}
            history={selectedAppointment.history}
          />
        </div>
      )}
    </div>
  );
};

export default Appointments;
