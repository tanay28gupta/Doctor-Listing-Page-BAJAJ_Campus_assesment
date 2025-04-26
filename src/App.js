import React, { useState, useEffect } from 'react';
import FilterPanel from './components/FilterPanel';
import DoctorList from './components/DoctorList';
import './styles/App.css';


const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [allSpecialties, setAllSpecialties] = useState([]);
  const [filters, setFilters] = useState({
    specialties: [],
    consultationMode: 'All',
    sortBy: '',
    searchQuery: '',
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch('https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json');
      const data = await response.json();
      setDoctors(data);
      setFilteredDoctors(data);

      // Extract unique specialties
      const specialtiesSet = new Set();
      data.forEach((doctor) => {
        doctor.specialities?.forEach((spec) => {
          if (spec.name) specialtiesSet.add(spec.name);
        });
      });
      setAllSpecialties([...specialtiesSet]);
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    const filtered = doctors.filter((doctor) => {
      if (
        filters.searchQuery &&
        !doctor.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) {
        return false;
      }

      if (filters.specialties.length > 0) {
        const doctorSpecs = doctor.specialities?.map((s) => s.name);
        if (!filters.specialties.every((s) => doctorSpecs?.includes(s))) {
          return false;
        }
      }

      if (
        filters.consultationMode !== 'All' &&
        ((filters.consultationMode === 'Video Consultation' && !doctor.video_consult) ||
         (filters.consultationMode === 'In Clinic' && !doctor.in_clinic))
      ) {
        return false;
      }

      return true;
    });

    if (filters.sortBy === 'fees') {
      filtered.sort((a, b) => {
        const feeA = parseInt(a.fees?.replace(/[^\d]/g, '')) || 0;
        const feeB = parseInt(b.fees?.replace(/[^\d]/g, '')) || 0;
        return feeA - feeB;
      });
    } else if (filters.sortBy === 'experience') {
      filtered.sort((a, b) => {
        const expA = parseInt(a.experience?.match(/\d+/)?.[0]) || 0;
        const expB = parseInt(b.experience?.match(/\d+/)?.[0]) || 0;
        return expB - expA;
      });
    }

    setFilteredDoctors(filtered);
  }, [filters, doctors]);

  return (
    <div className="App">
      <div className="header">
        <h1>Doctor Listing</h1>
        <input
          type="text"
          placeholder="Search for a doctor"
          value={filters.searchQuery}
          onChange={(e) =>
            setFilters({ ...filters, searchQuery: e.target.value })
          }
          className="search-bar"
        />
      </div>

      <div className="main-content">
        <FilterPanel
          filters={filters}
          setFilters={setFilters}
          allSpecialties={allSpecialties}
        />
        <DoctorList filteredDoctors={filteredDoctors} />
      </div>
    </div>
  );
};

export default App;
