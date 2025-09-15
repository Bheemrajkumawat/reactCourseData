import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="w-full">
        {/* Top Black Bar */}
        <section className="text-white">
          <div className="max-w-[95%] mx-auto flex justify-between items-center p-2 pr-50 bg-gray-900">
            <p className="text-sm pl-50">
              Get Bheemraj Membership, 30-day return or refund guarantee.
            </p>
            <div>
              <NavLink
                to="#"
                className="mr-5 px-3 py-1 text-blue-400 font-semibold hover:text-blue-600"
              >
                SIGN IN
              </NavLink>
              <NavLink
                to="#"
                className="px-3 py-1 text-blue-400 font-semibold hover:text-blue-600"
              >
                SIGN UP
              </NavLink>
            </div>
          </div>
        </section>

        {/* Logo + Navigation in one row */}
        <div className="w-full ">
          <div className="max-w-[95%] mx-auto flex justify-between items-center h-16 px-6 bg-gray-100 shadow-sm">
            {/* Logo */}
            <NavLink to="#" className="text-2xl font-bold text-blue-600 pl-50">
              BheemFlix
            </NavLink>

            {/* Navigation */}
            <nav>
              <ul className="flex space-x-10 font-medium text-gray-700 pr-50">
                <li className="hover:text-blue-600 cursor-pointer">
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                  <NavLink to="/about">ABOUT</NavLink>
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                  <NavLink to="/movie">MOVIES</NavLink>
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                  <NavLink to="/contact">CONTACT</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
