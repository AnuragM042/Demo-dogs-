import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo2.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-slate-900 fixed h-[100px] top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={nav ? 'true' : 'false'}
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              {nav ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  exact
                  to="/"
                  activeClassName="bg-black text-white"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/overnight-camps"
                  activeClassName="bg-black text-white"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Overnight Stay
                </NavLink>
                <NavLink
                  to="/sailing"
                  activeClassName="bg-black text-white"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Sailing
                </NavLink>
                <NavLink
                  to="/activity"
                  activeClassName="bg-black text-white"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  One Day Activity
                </NavLink>
                <NavLink
                  to="/tripindia"
                  activeClassName="bg-black text-white"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Trip India
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="bg-black text-white"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  activeClassName="bg-black text-white"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${nav ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 bg-black pt-2">
          <NavLink
            exact
            to="/"
            activeClassName="bg-black text-white"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setNav(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/overnight-camps"
            activeClassName="bg-black text-white"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setNav(false)}
          >
            Overnight Stay
          </NavLink>
          <NavLink
            to="/sailing"
            activeClassName="bg-black text-white"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setNav(false)}
          >
            Sailing
          </NavLink>
          <NavLink
            to="/activity"
            activeClassName="bg-black text-white"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setNav(false)}
          >
            One Day Activity
          </NavLink>
          <NavLink
            to="/tripindia"
            activeClassName="bg-black text-white"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setNav(false)}
          >
            Trip India
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="bg-black text-white"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setNav(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="bg-black text-white"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setNav(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
