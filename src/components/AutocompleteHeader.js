import React, { useState, useEffect } from 'react';

const AutocompleteHeader = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      onSearch(value);
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 2) {
        const response = await fetch('https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json');
        const data = await response.json();
        const filteredSuggestions = data.filter((doctor) =>
          doctor.name.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredSuggestions.slice(0, 3));
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [query]);

  return (
    <div className="autocomplete-header">
      <input
        data-testid="autocomplete-input"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search doctor by name"
      />
      <ul>
        {suggestions.map((doctor) => (
          <li
            key={doctor.id}
            data-testid="suggestion-item"
            onClick={() => onSearch(doctor.name)}
          >
            {doctor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteHeader;
