import React, { useState } from 'react';
import { Mail, MessageCircle, CheckCircle } from 'lucide-react';

const HelpDesk = () => {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState('');

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    if (!newTicket.trim()) return;

    const ticket = {
      id: Date.now(),
      query: newTicket,
      status: 'Open',
      response: '',
    };
    setTickets([...tickets, ticket]);
    setNewTicket('');
  };

  const handleRespond = (id, response) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id ? { ...ticket, status: 'Resolved', response } : ticket
      )
    );
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Help Desk & FAQs</h1>
        <p className="text-gray-600 mt-2">Raise a ticket for your queries or check FAQs</p>
      </header>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmitTicket} className="space-y-4">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Raise a New Ticket</h3>
          </div>
          <textarea
            value={newTicket}
            onChange={(e) => setNewTicket(e.target.value)}
            placeholder="Describe your issue or query..."
            className="w-full h-24 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Ticket
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold">Your Tickets</h3>
        </div>
        <div className="space-y-4 mt-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">{ticket.query}</p>
                  <p className="text-sm text-gray-600">Status: {ticket.status}</p>
                </div>
                {ticket.status === 'Open' && (
                  <button
                    onClick={() => {
                      const response = prompt('Enter your response:');
                      if (response) handleRespond(ticket.id, response);
                    }}
                    className="bg-green-600 text-white py-1 px-3 rounded-lg hover:bg-green-700 transition"
                  >
                    Respond
                  </button>
                )}
              </div>
              {ticket.response && (
                <div className="mt-2 bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-800">{ticket.response}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;