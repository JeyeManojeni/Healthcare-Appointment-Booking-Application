
import React, { useState } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import Header from './components/Header';
import DoctorList from './components/DoctorList';
import DoctorProfile from './components/DoctorProfile';
import BookingForm from './components/BookingForm';

type AppPage = 'home' | 'profile' | 'booking';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const { doctors } = useAppContext();

  const selectedDoctor = selectedDoctorId 
    ? doctors.find(doctor => doctor.id === selectedDoctorId)
    : null;

  const handleSelectDoctor = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
    setCurrentPage('profile');
  };

  const handleBookAppointment = () => {
    setCurrentPage('booking');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedDoctorId(null);
  };

  const handleBackToProfile = () => {
    setCurrentPage('profile');
  };

  const handleNavigate = (page: string) => {
    if (page === 'home') {
      handleBackToHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && (
        <DoctorList onSelectDoctor={handleSelectDoctor} />
      )}
      
      {currentPage === 'profile' && selectedDoctor && (
        <DoctorProfile
          doctor={selectedDoctor}
          onBack={handleBackToHome}
          onBookAppointment={handleBookAppointment}
        />
      )}
      
      {currentPage === 'booking' && selectedDoctor && (
        <BookingForm
          doctor={selectedDoctor}
          onBack={handleBackToProfile}
        />
      )}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;