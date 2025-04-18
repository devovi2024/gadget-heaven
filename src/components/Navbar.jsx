import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location]);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#D4AF37' : '#3B3B3B', 
    fontWeight: isActive ? 'bold' : 'normal',
    borderBottom: isActive ? '2px solid #D4AF37' : 'none',
    paddingBottom: '4px',
    transition: '0.3s',
    textDecoration: 'none',
  });

  return (
    <nav
      className={`w-full px-6 sm:px-8 py-4 flex justify-between items-center ${
        isHome ? 'bg-transparent text-white absolute z-50' : 'bg-white shadow-lg'
      }`}
    >
      {/* Logo and Brand */}
      <div className="flex items-center gap-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-500 uppercase tracking-widest">
          GadgetHaven
        </h1>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden sm:flex gap-8 text-lg font-medium text-gray-800">
        <NavLink to="/" style={navLinkStyle} className="hover:text-amber-500 transition-colors duration-300">
          Home
        </NavLink>
        <NavLink to="/dashboard" style={navLinkStyle} className="hover:text-amber-500 transition-colors duration-300">
          Dashboard
        </NavLink>
        <NavLink to="/statistics" style={navLinkStyle} className="hover:text-amber-500 transition-colors duration-300">
          Stats
        </NavLink>
        <NavLink to="/about" style={navLinkStyle} className="hover:text-amber-500 transition-colors duration-300">
          About
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-gray-800"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 right-0 bg-white shadow-md sm:hidden py-4 px-6 z-50`}
      >
        <NavLink
          to="/"
          style={navLinkStyle}
          className="block py-2 text-lg font-medium text-gray-800 hover:text-amber-500"
          onClick={() => setIsMenuOpen(false)} 
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          style={navLinkStyle}
          className="block py-2 text-lg font-medium text-gray-800 hover:text-amber-500"
          onClick={() => setIsMenuOpen(false)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/statistics"
          style={navLinkStyle}
          className="block py-2 text-lg font-medium text-gray-800 hover:text-amber-500"
          onClick={() => setIsMenuOpen(false)}
        >
          Stats
        </NavLink>
        <NavLink
          to="/about"
          style={navLinkStyle}
          className="block py-2 text-lg font-medium text-gray-800 hover:text-amber-500"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
