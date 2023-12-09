// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-center">
      <div className="flex justify-center space-x-4">
        <NavLink to="/" exact className="text-white" activeClassName="font-bold">
          Home
        </NavLink>
        <NavLink to="/education" className="text-white" activeClassName="font-bold">
          Education
        </NavLink>
        <NavLink to="/skills" className="text-white" activeClassName="font-bold">
          Skills
        </NavLink>
        <NavLink to="/projects" className="text-white" activeClassName="font-bold">
          Projects
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
