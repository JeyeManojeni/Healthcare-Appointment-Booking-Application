
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Doctor, Appointment, AppContextType } from '../types';
import { doctorsData } from '../data/doctors';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [doctors] = useState<Doctor[]>(doctorsData);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');

  const addAppointment = (appointmentData: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    };
    setAppointments(prev => [...prev, newAppointment]);
  };

  const value: AppContextType = {
    doctors,
    appointments,
    addAppointment,
    searchQuery,
    setSearchQuery,
    selectedSpecialization,
    setSelectedSpecialization
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};