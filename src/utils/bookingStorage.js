const BOOKINGS_KEY = 'doctor_appointments';

const getBookings = () => {
  try {
    const storedData = localStorage.getItem(BOOKINGS_KEY);
    return storedData ? JSON.parse(storedData) : { bookings: [] };
  } catch (error) {
    console.error('Error reading bookings:', error);
    return { bookings: [] };
  }
};

const saveBooking = (bookingData) => {
  try {
    const currentData = getBookings();
    const newBooking = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...bookingData
    };
    
    currentData.bookings.push(newBooking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(currentData));
    return newBooking;
  } catch (error) {
    console.error('Error saving booking:', error);
    throw error;
  }
};

export { getBookings, saveBooking }; 