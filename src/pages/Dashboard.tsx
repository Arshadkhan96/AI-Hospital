import React from 'react';
import { Activity, Calendar, Users, FileText } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your medical dashboard</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Appointments"
          value="3"
          icon={<Calendar className="h-6 w-6" />}
          description="Upcoming appointments"
        />
        <DashboardCard
          title="Test Results"
          value="2"
          icon={<FileText className="h-6 w-6" />}
          description="Pending results"
        />
        <DashboardCard
          title="Consultations"
          value="5"
          icon={<Users className="h-6 w-6" />}
          description="Recent consultations"
        />
        <DashboardCard
          title="Health Score"
          value="85%"
          icon={<Activity className="h-6 w-6" />}
          description="Overall health rating"
        />
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="text-blue-600">{icon}</div>
      <span className="text-2xl font-bold text-gray-900">{value}</span>
    </div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm mt-1">{description}</p>
  </div>
);

export default Dashboard;