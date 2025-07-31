
export const getAvailabilityColor = (status: string) => {
  switch (status) {
    case 'available':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'busy':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'on-leave':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getAvailabilityText = (status: string) => {
  switch (status) {
    case 'available':
      return 'Available Today';
    case 'busy':
      return 'Limited Slots';
    case 'on-leave':
      return 'Currently Unavailable';
    default:
      return 'Status Unknown';
  }
};

export const formatTime = (time: string) => {
  const [hour, minute] = time.split(':');
  const hourNum = parseInt(hour);
  const ampm = hourNum >= 12 ? 'PM' : 'AM';
  const displayHour = hourNum % 12 || 12;
  return `${displayHour}:${minute} ${ampm}`;
};

export const getDayName = (date: Date) => {
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidDate = (dateString: string) => {
  const selectedDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
};