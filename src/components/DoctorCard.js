import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card" data-testid="doctor-card">
      <h3 data-testid="doctor-name">{doctor.name}</h3>
      <p data-testid="doctor-specialty">{doctor.specialties.join(', ')}</p>
      <p data-testid="doctor-experience">{doctor.experience} years experience</p>
      <p data-testid="doctor-fee">${doctor.fee}</p>
    </div>
  );
};

export default DoctorCard;
