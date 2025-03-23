import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI medical assistant. How can I help you today?",
      isBot: true
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSend = () => {
    if (!currentMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: currentMessage, isBot: false }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I understand your concern. Based on what you've described, I recommend scheduling an appointment with a healthcare provider for a proper evaluation. Would you like me to help you with that?",
        isBot: true
      }]);
    }, 1000);

    // Clear input
    setCurrentMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset chat state when closing
    setCurrentMessage('');
    setMessages([
      {
        text: "Hello! I'm your AI medical assistant. How can I help you today?",
        isBot: true
      }   
    ]);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold">Medical Assistant</h3>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="h-96 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <Message key={index} {...message} />
              ))}
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={handleSend}
                disabled={!currentMessage.trim()}
                className={`px-4 py-2 rounded-lg flex items-center justify-center ${
                  currentMessage.trim() 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-200 cursor-not-allowed text-gray-500'
                }`}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Message = ({ text, isBot }) => (
  <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
    <div
      className={`max-w-[80%] p-3 rounded-lg ${
        isBot
          ? 'bg-gray-100 text-gray-800'
          : 'bg-blue-600 text-white'
      }`}
    >
      {text}
    </div>
  </div>
);

export default ChatBot;