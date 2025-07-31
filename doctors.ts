import { Doctor } from '../types';

export const doctorsData: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiologist',
    image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300',
    availability: 'available',
    experience: 15,
    rating: 4.9,
    location: 'City Medical Center',
    about: 'Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology and non-invasive cardiac procedures.',
    education: ['MD from Harvard Medical School', 'Residency at Johns Hopkins Hospital', 'Fellowship in Interventional Cardiology'],
    schedule: {
      'Monday': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
      'Tuesday': ['09:00', '10:00', '11:00', '14:00', '15:00'],
      'Wednesday': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
      'Thursday': ['09:00', '10:00', '14:00', '15:00'],
      'Friday': ['09:00', '10:00', '11:00', '14:00', '15:00'],
      'Saturday': ['09:00', '10:00', '11:00'],
      'Sunday': []
    },
    consultationFee: 200
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialization: 'Dermatologist',
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
    availability: 'available',
    experience: 12,
    rating: 4.8,
    location: 'Skin Care Clinic',
    about: 'Dr. Michael Chen is a renowned dermatologist specializing in cosmetic and medical dermatology. He has extensive experience in treating skin conditions and aesthetic procedures.',
    education: ['MD from Stanford University', 'Dermatology Residency at UCSF', 'Fellowship in Dermatopathology'],
    schedule: {
      'Monday': ['09:00', '10:00', '11:00', '15:00', '16:00'],
      'Tuesday': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
      'Wednesday': ['09:00', '10:00', '14:00', '15:00'],
      'Thursday': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
      'Friday': ['09:00', '10:00', '11:00', '15:00', '16:00'],
      'Saturday': ['09:00', '10:00'],
      'Sunday': []
    },
    consultationFee: 150
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialization: 'Pediatrician',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300',
    availability: 'busy',
    experience: 8,
    rating: 4.7,
    location: 'Children\'s Healthcare Center',
    about: 'Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive healthcare for children from infancy through adolescence.',
    education: ['MD from UCLA', 'Pediatric Residency at Children\'s Hospital Los Angeles', 'Board Certified in Pediatrics'],
    schedule: {
      'Monday': ['14:00', '15:00'],
      'Tuesday': ['09:00', '10:00'],
      'Wednesday': ['14:00', '15:00', '16:00'],
      'Thursday': ['09:00', '10:00'],
      'Friday': ['14:00', '15:00'],
      'Saturday': [],
      'Sunday': []
    },
    consultationFee: 120
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialization: 'Orthopedist',
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300',
    availability: 'available',
    experience: 20,
    rating: 4.9,
    location: 'Orthopedic Surgery Center',
    about: 'Dr. James Wilson is a highly experienced orthopedic surgeon specializing in joint replacement and sports medicine with over two decades of practice.',
    education: ['MD from Mayo Clinic', 'Orthopedic Surgery Residency at Hospital for Special Surgery', 'Fellowship in Sports Medicine'],
    schedule: {
      'Monday': ['08:00', '09:00', '10:00', '14:00', '15:00'],
      'Tuesday': ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00'],
      'Wednesday': ['08:00', '09:00', '14:00', '15:00'],
      'Thursday': ['08:00', '09:00', '10:00', '11:00', '14:00'],
      'Friday': ['08:00', '09:00', '10:00'],
      'Saturday': ['08:00', '09:00'],
      'Sunday': []
    },
    consultationFee: 250
  },
  {
    id: '5',
    name: 'Dr. Lisa Thompson',
    specialization: 'Neurologist',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
    availability: 'on-leave',
    experience: 18,
    rating: 4.8,
    location: 'Neurology Institute',
    about: 'Dr. Lisa Thompson is a board-certified neurologist with expertise in treating neurological disorders and conducting advanced neurological research.',
    education: ['MD from University of Pennsylvania', 'Neurology Residency at Mass General', 'Fellowship in Movement Disorders'],
    schedule: {
      'Monday': [],
      'Tuesday': [],
      'Wednesday': [],
      'Thursday': [],
      'Friday': [],
      'Saturday': [],
      'Sunday': []
    },
    consultationFee: 300
  },
  {
    id: '6',
    name: 'Dr. Robert Martinez',
    specialization: 'General Practitioner',
    image: 'https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=300',
    availability: 'available',
    experience: 10,
    rating: 4.6,
    location: 'Family Medicine Clinic',
    about: 'Dr. Robert Martinez is a dedicated family physician providing comprehensive primary care for patients of all ages with a focus on preventive medicine.',
    education: ['MD from University of Texas', 'Family Medicine Residency at Baylor', 'Board Certified in Family Medicine'],
    schedule: {
      'Monday': ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
      'Tuesday': ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
      'Wednesday': ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00'],
      'Thursday': ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
      'Friday': ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00'],
      'Saturday': ['08:00', '09:00', '10:00'],
      'Sunday': []
    },
    consultationFee: 100
  }
];