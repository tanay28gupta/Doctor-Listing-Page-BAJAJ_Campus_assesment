const fs = require('fs');
const path = require('path');

const BOOKINGS_FILE = path.join(process.cwd(), 'bookings.json');

// Initialize bookings file if it doesn't exist
if (!fs.existsSync(BOOKINGS_FILE)) {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify({ bookings: [] }, null, 2));
}

const getBookings = () => {
  try {
    const data = fs.readFileSync(BOOKINGS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading bookings file:', error);
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
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(currentData, null, 2));
    return newBooking;
  } catch (error) {
    console.error('Error saving booking:', error);
    throw error;
  }
};

module.exports = {
  getBookings,
  saveBooking
};