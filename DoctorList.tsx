
import React from 'react';
import { useAppContext } from '../context/AppContext';
import DoctorCard from './DoctorCard';
import SearchBar from './SearchBar';

interface DoctorListProps {
  onSelectDoctor: (doctorId: string) => void;
}

const DoctorList: React.FC<DoctorListProps> = ({ onSelectDoctor }) => {
  const { doctors, searchQuery, selectedSpecialization } = useAppContext();

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = searchQuery === '' || 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialization = selectedSpecialization === '' || 
      doctor.specialization === selectedSpecialization;
    
    return matchesSearch && matchesSpecialization;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Your Doctor</h2>
        <p className="text-gray-600">Book appointments with top healthcare professionals</p>
      </div>
      
      <SearchBar />
      
      {filteredDoctors.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-16 w-16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map(doctor => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onSelect={onSelectDoctor}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorList;