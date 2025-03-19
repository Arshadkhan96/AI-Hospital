import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const Appointments = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
        <p className="text-gray-600 mt-2">Schedule and manage your medical appointments</p>
      </header>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <AppointmentCard key={index} {...appointment} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AppointmentCard = ({ doctor, specialty, date, time, status }) => (
  <div className="border rounded-lg p-4 hover:border-blue-500 transition">
    <div className="flex items-start justify-between">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5 text-blue-600" />
          <span className="font-semibold">{doctor}</span>
        </div>
        <div className="text-gray-600">{specialty}</div>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
        </div>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm ${
        status === 'Confirmed' ? 'bg-green-100 text-green-800' :
        status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {status}
      </span>
    </div>
  </div>
);

const appointments = [
  {
    doctor: "Dr. Sarah Johnson",
    specialty: "General Physician",
    date: "2024-03-15",
    time: "10:00 AM",
    status: "Confirmed"
  },
  {
    doctor: "Dr. Michael Chen",
    specialty: "Cardiologist",
    date: "2024-03-18",
    time: "2:30 PM",
    status: "Pending"
  },
  {
    doctor: "Dr. Emily Williams",
    specialty: "Dermatologist",
    date: "2024-03-20",
    time: "11:15 AM",
    status: "Confirmed"
  }
];

export default Appointments;