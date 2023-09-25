import React, { useState } from 'react';
import './style.css';
import SearchIcon from '../../Assets/Search Icon.png';

const SearchPast = ({ searchTerm, onSearch }) => {
  const [inputActive, setInputActive] = useState(false);

  const toggleInput = () => {
    setInputActive(!inputActive);
  };

  const handleSearchChange = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <div className="input-past">
      <div className="search-container">
        {inputActive && (
          <input className="input" value={searchTerm} onChange={handleSearchChange} />
        )}
        <button className={`buttonForInput ${inputActive ? 'active' : ''}`} onClick={toggleInput}>
          <img src={SearchIcon} alt="input" />
        </button>
      </div>
    </div>
  );
};

export default SearchPast;
