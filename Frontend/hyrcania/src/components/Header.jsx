import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="relative w-full h-dvh z-50 p-4 bg-gradient-to-b from-blue-900 to-teal-700">
      
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 bg-[url('./components/images/headerBg.jpg')]"
      ></div>


      <div className="relative z-10">
        <div className="flex items-center ">
          <Link to="/" className="text-3xl font-bold text-white">
            Hyrcania
          </Link>

          <nav className="rounded-full bg-gray-800 text-white p-4 ml-64">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-blue-500">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/clubs" className="hover:text-blue-500">
                  CLUBS
                </Link>
              </li>
              <li>
                <Link to="/solution" className="hover:text-blue-500">
                  SOLUTION
                </Link>
              </li>
            </ul>
          </nav>

          <Link to="/" className="rounded-full bg-gray-800 text-white p-4 ml-auto">
            Login and Register
          </Link>
        </div>

        <div className="text-white text-center mt-60 text-6xl">
          <h6>Run fast, run Free</h6>
        </div>
      </div>
    </header>
  );
}

export default Header;
