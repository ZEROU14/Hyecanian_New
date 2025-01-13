import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="relative top-0 w-full h-96  z-50 p-4 bg-gradient-to-b from-blue-900 to-teal-700">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 bg-[url('./components/images/headerBg.jpg')]"
        
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full  items-center ">
        <Link to="/" className="text-3xl font-bold text-white">
          Hyrcania
        </Link>
        <div className="mx-auto w-60 ">
          <nav className="rounded-full bg-gray-800 text-white p-4">
            <ul className="flex justify-center">
              <li className="mr-4">
                <Link to="/" className="hover:text-blue-500">
                  HOME
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/clubs" className="hover:text-blue-500">
                  CLUBS
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/solution" className="hover:text-blue-500">
                  SOLUTION
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
