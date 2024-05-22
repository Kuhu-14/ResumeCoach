import React, { useState } from 'react';
import './FilterPage.css'; // Import CSS file for styling

function FilterPage() {
  // State to store selected filters
  const [filters, setFilters] = useState({
    option1: '',
    option2: '',
    option3: '',
  });

  // Function to handle filter selection
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

   // Function to handle applying filters
   const applyFilters = () => {
    // Implement functionality to apply filters
    console.log("Filters applied:", filters);
  };

  // Function to handle canceling
  const cancel = () => {
    // Implement functionality to cancel
    console.log("Filters canceled");
    setFilters({
      option1: '',
      option2: '',
      option3: '',
    });
  };

  return (
    <div className="container" style={{ backgroundColor: '#C7F3B2'}}>
      <button className="cancel-button" onClick={cancel}>Cancel</button>
      <h1>Filter Page</h1>
      <button className="apply-button" onClick={applyFilters}>Apply Filters</button>
      <div className="filters">
      <label>
        
        <select name="Domain Based" value={filters.option1} onChange={handleFilterChange}>
          <option value="">Domain Based</option>
          <option value="option1_value1">Value 1</option>
          <option value="option1_value2">Value 2</option>
          <option value="option1_value3">Value 3</option>
        </select>
      </label>
      <br />
      <label>
        
        <select name="option2" value={filters.option2} onChange={handleFilterChange}>
          <option value="">Vacancy Based</option>
          <option value="option2_value1">Value 1</option>
          <option value="option2_value2">Value 2</option>
          <option value="option2_value3">Value 3</option>
        </select>
      </label>
      <br />
      <label>
        
        <select name="option3" value={filters.option3} onChange={handleFilterChange}>
          <option value="">Desired Location</option>
          <option value="option3_value1">Value 1</option>
          <option value="option3_value2">Value 2</option>
          <option value="option3_value3">Value 3</option>
        </select>
      </label>
      <br />
      <label>
        
        <select name="option3" value={filters.option3} onChange={handleFilterChange}>
          <option value="">Desired Role</option>
          <option value="option3_value1">Value 1</option>
          <option value="option3_value2">Value 2</option>
          <option value="option3_value3">Value 3</option>
        </select>
      </label>
      <br />
      </div>
      
      <ul>
        {Object.entries(filters).map(([filter, value]) => (
          value && <li key={filter}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterPage;


