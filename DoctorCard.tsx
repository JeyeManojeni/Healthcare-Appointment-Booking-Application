
import React from 'react';
import { Star, MapPin, Clock, DollarSign } from 'lucide-react';
import { Doctor } from '../types';
import { getAvailabilityColor, getAvailabilityText } from '../utils/helpers';

interface DoctorCardProps {
  doctor: Doctor;
  onSelect: (doctorId: string) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onSelect }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer group"
      onClick={() => onSelect(doctor.id)}
    >
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium border ${getAvailabilityColor(doctor.availability)}`}>
          {getAvailabilityText(doctor.availability)}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {doctor.name}
        </h3>
        <p className="text-blue-600 font-medium text-sm mb-3">{doctor.specialization}</p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span>{doctor.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{doctor.experience} years</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 text-sm text-gray-600 mb-3">
          <MapPin className="h-4 w-4" />
          <span>{doctor.location}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm font-medium text-green-600">
            <DollarSign className="h-4 w-4" />
            <span>${doctor.consultationFee}</span>
          </div>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(doctor.id);
            }}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;