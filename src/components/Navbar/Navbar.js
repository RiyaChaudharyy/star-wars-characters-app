import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import starWar from '../../assets/starWars.png';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='nav-container'>
      <img src={starWar} alt="Logo" className="navbar-logo" />
      <div className={`nav-right-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        {user ? (
          <>
            <Link to="/favorites" onClick={handleLinkClick}>Favorites</Link>
            <button className='nav-logout-btn' onClick={() => { logout(); handleLinkClick(); }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={handleLinkClick}>Login</Link>
            <Link to="/register" onClick={handleLinkClick}>Register</Link>
          </>
        )}
      </div>
      <div className="hamburger" onClick={handleMobileMenuToggle}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
