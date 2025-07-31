
import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Mail, CheckCircle } from 'lucide-react';
import { Doctor } from '../types';
import { useAppContext } from '../context/AppContext';
import { formatTime, getDayName, isValidEmail, isValidDate } from '../utils/helpers';

interface BookingFormProps {
  doctor: Doctor;
  onBack: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ doctor, onBack }) => {
  const { addAppointment } = useAppContext();
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    appointmentDate: '',
    appointmentTime: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const today = new Date();
  const nextSevenDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });

  const availableSlots = formData.appointmentDate 
    ? doctor.schedule[getDayName(new Date(formData.appointmentDate))] || []
    : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    }

    if (!formData.patientEmail.trim()) {
      newErrors.patientEmail = 'Email is required';
    } else if (!isValidEmail(formData.patientEmail)) {
      newErrors.patientEmail = 'Please enter a valid email address';
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Please select an appointment date';
    } else if (!isValidDate(formData.appointmentDate)) {
      newErrors.appointmentDate = 'Please select a future date';
    }

    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Please select an appointment time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      addAppointment({
        doctorId: doctor.id,
        patientName: formData.patientName,
        patientEmail: formData.patientEmail,
        appointmentDate: formData.appointmentDate,
        appointmentTime: formData.appointmentTime
      });
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your appointment with {doctor.name} has been successfully booked.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3">Appointment Details:</h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Doctor:</span> {doctor.name}</p>
              <p><span className="font-medium">Patient:</span> {formData.patientName}</p>
              <p><span className="font-medium">Date:</span> {new Date(formData.appointmentDate).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p><span className="font-medium">Time:</span> {formatTime(formData.appointmentTime)}</p>
              <p><span className="font-medium">Location:</span> {doctor.location}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={onBack}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Back to Doctor Profile
            </button>
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to {formData.patientEmail}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Profile</span>
      </button>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Appointment</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">Booking with:</h3>
          <div className="flex items-center space-x-3">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-blue-900">{doctor.name}</p>
              <p className="text-blue-700 text-sm">{doctor.specialization}</p>
              <p className="text-blue-600 text-sm">${doctor.consultationFee} consultation fee</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline h-4 w-4 mr-1" />
              Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.patientName ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.patientName && (
              <p className="mt-1 text-sm text-red-600">{errors.patientName}</p>
            )}
          </div>

          <div>
            <label htmlFor="patientEmail" className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="inline h-4 w-4 mr-1" />
              Email Address
            </label>
            <input
              type="email"
              id="patientEmail"
              name="patientEmail"
              value={formData.patientEmail}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.patientEmail ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter your email address"
            />
            {errors.patientEmail && (
              <p className="mt-1 text-sm text-red-600">{errors.patientEmail}</p>
            )}
          </div>

          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Appointment Date
            </label>
            <select
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.appointmentDate ? 'border-red-300' : 'border-gray-300'
              }`}
            >
              <option value="">Select a date</option>
              {nextSevenDays.map((date, index) => {
                const dayName = getDayName(date);
                const hasSlots = doctor.schedule[dayName] && doctor.schedule[dayName].length > 0;
                
                return (
                  <option
                    key={index}
                    value={date.toISOString().split('T')[0]}
                    disabled={!hasSlots}
                  >
                    {dayName} - {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    {!hasSlots && ' (No slots available)'}
                  </option>
                );
              })}
            </select>
            {errors.appointmentDate && (
              <p className="mt-1 text-sm text-red-600">{errors.appointmentDate}</p>
            )}
          </div>

          <div>
            <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="inline h-4 w-4 mr-1" />
              Appointment Time
            </label>
            <select
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleInputChange}
              disabled={!formData.appointmentDate}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                errors.appointmentTime ? 'border-red-300' : 'border-gray-300'
              } ${!formData.appointmentDate ? 'bg-gray-100' : ''}`}
            >
              <option value="">Select a time</option>
              {availableSlots.map((time, index) => (
                <option key={index} value={time}>
                  {formatTime(time)}
                </option>
              ))}
            </select>
            {errors.appointmentTime && (
              <p className="mt-1 text-sm text-red-600">{errors.appointmentTime}</p>
            )}
            {formData.appointmentDate && availableSlots.length === 0 && (
              <p className="mt-1 text-sm text-gray-600">No slots available for selected date</p>
            )}
          </div>

          <div className="border-t pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;