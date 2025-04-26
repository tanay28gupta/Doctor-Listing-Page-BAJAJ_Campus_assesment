import React, { useState } from 'react';
import '../styles/DoctorList.css';
import BookAppointment from './BookAppointment';

const DoctorList = ({ filteredDoctors }) => {
  const [expandedDoctorId, setExpandedDoctorId] = useState(null);
  const [bookingDoctorId, setBookingDoctorId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedDoctorId(expandedDoctorId === id ? null : id);
  };

  const handleBookNow = (doctorId) => {
    setBookingDoctorId(doctorId);
  };

  return (
    <div className="doctor-list">
      {filteredDoctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <div className="doctor-header">
            <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
            <div className="doctor-info">
              <h2>{doctor.name}</h2>
              <p className="specialties">{doctor.specialities?.map((s) => s.name).join(', ')}</p>
              <div className="doctor-meta">
                <p><strong>Fees:</strong> {doctor.fees}</p>
                <p><strong>Experience:</strong> {doctor.experience}</p>
              </div>
              <div className="action-buttons">
                <button 
                  className="read-more-btn"
                  onClick={() => toggleExpand(doctor.id)}
                  aria-expanded={expandedDoctorId === doctor.id}
                >
                  {expandedDoctorId === doctor.id ? 'Show Less' : 'Read More'}
                  <span className="arrow-icon">
                    {expandedDoctorId === doctor.id ? '▼' : '▶'}
                  </span>
                </button>
                <button 
                  className="book-now-btn"
                  onClick={() => handleBookNow(doctor.id)}
                >
                  Book Now
                  <span className="calendar-icon">📅</span>
                </button>
              </div>
            </div>
          </div>

          {expandedDoctorId === doctor.id && (
            <div className="doctor-details expanded">
              <div className="details-content">
                <p className="introduction">{doctor.doctor_introduction}</p>
                <div className="details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Languages:</span>
                    <span className="detail-value">{doctor.languages?.join(', ')}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Clinic:</span>
                    <span className="detail-value">{doctor.clinic?.name}</span>
                  </div>
                  <div className="detail-item full-width">
                    <span className="detail-label">Address:</span>
                    <span className="detail-value">
                      {doctor.clinic?.address?.address_line1}, {doctor.clinic?.address?.locality}, {doctor.clinic?.address?.city}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {bookingDoctorId && (
        <div className="modal-overlay">
          <BookAppointment 
            doctor={filteredDoctors.find(d => d.id === bookingDoctorId)} 
            onClose={() => setBookingDoctorId(null)} 
          />
        </div>
      )}
    </div>
  );
};

export default DoctorList;
