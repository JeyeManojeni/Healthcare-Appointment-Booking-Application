
export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  availability: 'available' | 'busy' | 'on-leave';
  experience: number;
  rating: number;
  location: string;
  about: string;
  education: string[];
  schedule: {
    [key: string]: string[];
  };
  consultationFee: number;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  patientEmail: string;
  appointmentDate: string;
  appointmentTime: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface AppContextType {
  doctors: Doctor[];
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSpecialization: string;
  setSelectedSpecialization: (spec: string) => void;
}

