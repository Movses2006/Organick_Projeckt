import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { headerData } from './data';
import './style.css';
import Logo from '../../Assets/Logo.png';
import SearchPast from '../SearchPast/SearchPast';

const Header = () => {
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const togglePagesDropdown = () => {
    setShowPagesDropdown(!showPagesDropdown);
  };

  const closeDropdown = () => {
    setShowPagesDropdown(false);
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav-links">
        {headerData.map(({ title, path }) => (
          <Link key={path} to={path}>
            {title}
          </Link>
        ))}
        <div className={`dropdown ${showPagesDropdown ? 'active' : ''}`}>
          <span className="dropdown-button" onClick={togglePagesDropdown}>
            Pages
          </span>
          {showPagesDropdown && (
            <div className="dropdown-content" onClick={closeDropdown}>
              <Link to="/contactus">Contact Us</Link>
              <Link to="/news">News</Link>
              <Link to="/licenses">Licenses</Link>
              <Link to="/service">Service</Link>
              <Link to="/service&single">Service Single</Link>
              <Link to="/team">Team</Link>
            </div>
          )}
        </div>
      </div>
      <div className="search">
        <SearchPast searchTerm={searchTerm} onSearch={setSearchTerm} />
      </div>
    </div>
  );
};

export default Header;
