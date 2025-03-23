import React, { useState } from 'react';
import { Search, AlertCircle, RotateCcw } from 'lucide-react';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeSymptoms = async () => {
    if (!symptoms.trim()) {
      return;
    }

    setLoading(true);
    // Simulate API call with mock data
    setTimeout(() => {
      const mockAnalysis = {
        possibleConditions: [
          {
            condition: "Common Cold",
            probability: "High",
            urgency: "Low",
            recommendations: [
              "Rest and hydration",
              "Over-the-counter cold medication",
              "Monitor symptoms"
            ]
          },
          {
            condition: "Seasonal Allergies",
            probability: "Medium",
            urgency: "Low",
            recommendations: [
              "Antihistamines",
              "Avoid allergen exposure",
              "Use air purifier"
            ]
          }
        ],
        generalAdvice: "Please consult a healthcare professional for accurate diagnosis."
      };
      
      setAnalysis(mockAnalysis);
      setLoading(false);
    }, 1500);
  };

  const resetForm = () => {
    setSymptoms('');
    setAnalysis(null);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">AI Symptom Checker</h1>
        <p className="text-gray-600 mt-2">
          Describe your symptoms and get an instant preliminary assessment
        </p>
      </header>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Describe your symptoms in detail..."
            className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="flex gap-4">
            <button 
              onClick={analyzeSymptoms}
              disabled={loading || !symptoms.trim()}
              className={`flex-1 py-3 rounded-lg transition flex items-center justify-center space-x-2 
                ${loading || !symptoms.trim() 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'} text-white`}
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  <span>Analyze Symptoms</span>
                </>
              )}
            </button>
            {analysis && (
              <button
                onClick={resetForm}
                className="px-4 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition flex items-center justify-center"
                title="Reset Form"
              >
                <RotateCcw className="h-5 w-5 text-gray-700" />
              </button>
            )}
          </div>
        </div>

        {analysis && (
          <div className="mt-8 space-y-6">
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Possible Conditions</h3>
              <div className="space-y-4">
                {analysis.possibleConditions.map((condition, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{condition.condition}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        condition.probability === 'High' 
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {condition.probability} Probability
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Urgency: {condition.urgency}</p>
                      <div>
                        <p className="text-sm font-medium mb-1">Recommendations:</p>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {condition.recommendations.map((rec, idx) => (
                            <li key={idx}>{rec}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800">{analysis.generalAdvice}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;