"use client"

import { workshops } from '@/lib/mock-data';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function WorkshopsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-40 py-12">
      <h1 className="text-4xl font-bold mb-8">Upcoming Workshops</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-black mb-2">{workshop.title}</h2>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium
                ${workshop.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                  workshop.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'}`}
              >
                {workshop.level}
              </span>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>{new Date(workshop.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>{workshop.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>{workshop.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>{workshop.enrolled} / {workshop.capacity} enrolled</span>
              </div>
            </div>
            
            <button 
              type="button"
              className={`mt-6 w-full py-2 px-4 rounded-md font-medium transition
                ${workshop.enrolled >= workshop.capacity
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              disabled={workshop.enrolled >= workshop.capacity}
              onClick={() => {
                 if(workshop.enrolled < workshop.capacity) {
                  alert("Registration successful! We will contact you with further details.");
                }
              }}
            >
              {workshop.enrolled >= workshop.capacity ? 'Workshop Full' : 'Register Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}