
import React from 'react';
import { ArrowLeft, Star, MapPin, Clock, DollarSign, GraduationCap, Calendar } from 'lucide-react';
import { Doctor } from '../types';
import { getAvailabilityColor, getAvailabilityText, formatTime } from '../utils/helpers';

interface DoctorProfileProps {
  doctor: Doctor;
  onBack: () => void;
  onBookAppointment: () => void;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctor, onBack, onBookAppointment }) => {
  const today = new Date();
  const nextSevenDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Doctors</span>
      </button>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <p className="text-blue-600 font-medium text-lg mb-2">{doctor.specialization}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getAvailabilityColor(doctor.availability)}`}>
                  {getAvailabilityText(doctor.availability)}
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 text-lg font-semibold text-green-600 mb-2">
                  <DollarSign className="h-5 w-5" />
                  <span>${doctor.consultationFee}</span>
                </div>
                <p className="text-sm text-gray-600">Consultation Fee</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>{doctor.rating} Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span>{doctor.experience} Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 col-span-2">
                <MapPin className="h-5 w-5" />
                <span>{doctor.location}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Education & Qualifications
              </h3>
              <ul className="space-y-2">
                {doctor.education.map((edu, index) => (
                  <li key={index} className="text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            {doctor.availability !== 'on-leave' && (
              <button
                onClick={onBookAppointment}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Book Appointment
              </button>
            )}
          </div>
        </div>
      </div>

      {doctor.availability !== 'on-leave' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mt-6 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Available Time Slots
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nextSevenDays.map((date, index) => {
              const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
              const slots = doctor.schedule[dayName] || [];
              
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="mb-2">
                    <p className="font-medium text-gray-900">{dayName}</p>
                    <p className="text-sm text-gray-600">
                      {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                  <div className="space-y-1">
                    {slots.length > 0 ? (
                      slots.slice(0, 3).map((time, timeIndex) => (
                        <div key={timeIndex} className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {formatTime(time)}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400">No slots available</p>
                    )}
                    {slots.length > 3 && (
                      <p className="text-xs text-gray-500">+{slots.length - 3} more slots</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;