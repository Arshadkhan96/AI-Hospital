import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Activity } from 'lucide-react';

const HealthAnalytics = () => {
  const [healthData, setHealthData] = useState([]);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');

  const weightChartRef = useRef(null);
  const glucoseChartRef = useRef(null);
  const bloodPressureChartRef = useRef(null);
  const weightChartInstance = useRef(null);
  const glucoseChartInstance = useRef(null);
  const bloodPressureChartInstance = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\d{2,3}\/\d{2,3}/.test(bloodPressure)) {
      alert('Invalid blood pressure format. Use format like 120/80.');
      return;
    }
    if (!height || height <= 0) {
      alert('Please enter a valid height.');
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmi = parseFloat(weight) / (heightInMeters * heightInMeters);

    const metrics = {
      weight: parseFloat(weight),
      height: parseFloat(height),
      bmi: parseFloat(bmi.toFixed(2)),
      bloodPressure,
      glucoseLevel: parseFloat(glucoseLevel),
      date: new Date().toLocaleDateString(),
    };
    setHealthData([...healthData, metrics]);
    setWeight('');
    setHeight('');
    setBloodPressure('');
    setGlucoseLevel('');
  };

  const createChart = (canvasRef, data, label, borderColor, chartInstanceRef) => {
    if (!canvasRef.current) return;
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    const ctx = canvasRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: healthData.map((entry) => entry.date),
        datasets: [{ label, data, borderColor, borderWidth: 2, fill: false }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
      },
    });
  };

  useEffect(() => {
    createChart(weightChartRef, healthData.map((entry) => entry.weight), 'Weight (kg)', 'rgba(75, 192, 192, 1)', weightChartInstance);
  }, [healthData]);

  useEffect(() => {
    createChart(glucoseChartRef, healthData.map((entry) => entry.glucoseLevel), 'Glucose Level (mg/dL)', 'rgba(153, 102, 255, 1)', glucoseChartInstance);
  }, [healthData]);

  useEffect(() => {
    createChart(bloodPressureChartRef, healthData.map((entry) => parseInt(entry.bloodPressure.split('/')[0])), 'Blood Pressure (Systolic)', 'rgba(255, 99, 132, 1)', bloodPressureChartInstance);
  }, [healthData]);

  const getPredictiveInsights = () => {
    if (healthData.length < 2) {
      return <p className="text-gray-500">Enter more data to see predictions.</p>;
    }

    const latest = healthData[healthData.length - 1];
    const first = healthData[0];

    const weightTrend = latest.weight > first.weight ? 'increasing' : 'decreasing';
    const bmiCategory = latest.bmi > 25 ? 'overweight' : latest.bmi < 18.5 ? 'underweight' : 'healthy';

    return (
      <p className="text-gray-700 mt-2">
        Based on your data, your weight trend is <strong>{weightTrend}</strong>, and your BMI is <strong>{latest.bmi}</strong>, which indicates a <strong>{bmiCategory}</strong> category.
      </p>
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-blue-700 flex items-center gap-2"><Activity /> Health Analytics</h1>
        <p className="text-gray-600 mt-2">Track and analyze your health data</p>
      </header>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (kg)" className="w-full p-2 border rounded-lg" required />
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height (cm)" className="w-full p-2 border rounded-lg" required />
          <input type="text" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} placeholder="Blood Pressure (e.g., 120/80)" className="w-full p-2 border rounded-lg" required />
          <input type="number" value={glucoseLevel} onChange={(e) => setGlucoseLevel(e.target.value)} placeholder="Glucose Level (mg/dL)" className="w-full p-2 border rounded-lg" required />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition w-full">Submit</button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Health Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-52"><canvas ref={weightChartRef} /></div>
          <div className="h-52"><canvas ref={glucoseChartRef} /></div>
          <div className="h-52"><canvas ref={bloodPressureChartRef} /></div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold">Predictive Insights</h2>
        {getPredictiveInsights()}
      </div>
    </div>
  );
};

export default HealthAnalytics;
