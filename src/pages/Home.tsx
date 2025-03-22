import React from "react";
import { Activity, Calendar, MessageCircle, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI-Powered Healthcare Management
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience the future of healthcare with our AI-driven hospital
          management system. Get instant access to medical assistance, book
          appointments, and monitor your health.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        <Link to="/symptom-checker" className="w-full">
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-blue-600" />}
            title="AI Symptom Checker"
            description="Get instant preliminary diagnosis using our advanced AI system"
          />
        </Link>

        <Link to="/appointments" className="w-full">
          <FeatureCard
            icon={<Calendar className="h-8 w-8 text-blue-600" />}
            title="Smart Appointments"
            description="Book and manage appointments with AI-powered scheduling"
          />
        </Link>
        
        <Link to="/health-analytics" className="w-full">
          <FeatureCard
            icon={<Activity className="h-8 w-8 text-blue-600" />}
            title="Health Analytics"
            description="Track and analyze your health data with predictive insights"
          />
        </Link>
      </div>

      <section className="bg-white rounded-2xl shadow-xl p-8 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Choose MedAI Care?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src="src/image.jpg.webp"
            alt="Modern Hospital Environment"
            className="rounded-lg object-center h-[450px] w-full mx-auto"
          />

          <div className="space-y-4">
            <BenefitItem
              title="Advanced AI Technology"
              description="Utilizing cutting-edge artificial intelligence for accurate medical analysis"
            />
            <BenefitItem
              title="Instant Access"
              description="24/7 availability of medical assistance through our AI chatbot"
            />
            <BenefitItem
              title="Comprehensive Care"
              description="Complete healthcare management solution from diagnosis to recovery"
            />
            <BenefitItem
              title="Data Security"
              description="Your medical data is protected with enterprise-grade security"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:-translate-y-1 cursor-pointer w-full h-60 flex flex-col justify-between">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BenefitItem = ({ title, description }) => (
  <div className="border-l-4 border-blue-600 pl-4">
    <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
