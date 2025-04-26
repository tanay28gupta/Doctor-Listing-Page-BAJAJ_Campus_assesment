import React, { useState } from 'react';
import '../styles/BookingModal.css';

const BookingModal = ({ doctor, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBook = () => {
    alert(`Appointment booked with ${doctor.name} on ${formData.date} at ${formData.time}`);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h3>Book Appointment with {doctor.name}</h3>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} />
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <select name="time" value={formData.time} onChange={handleChange}>
          <option value="">Select Time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
        </select>

        <div className="modal-actions">
          <button onClick={handleBook}>Confirm</button>
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
