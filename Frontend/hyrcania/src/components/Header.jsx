import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="relative w-full h-dvh z-50 p-4 bg-gradient-to-b from-blue-900 to-teal-700"
      data-oid=":y2fh3g"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 bg-[url('./components/images/headerBg.jpg')]"
        data-oid="2mojvv8"
      ></div>

      <div className="relative z-10" data-oid="s7ud9u_">
        <div className="flex items-center " data-oid="-u6b8lj">
          <Link
            to="/"
            className="text-3xl font-bold text-black"
            data-oid="udlc3-r"
          >
            Hyrcania
          </Link>

          <nav
            className="rounded-full bg-gray-800 text-white p-4 ml-64"
            data-oid="t1tk_tp"
          >
            <ul className="flex space-x-4" data-oid="dje6-:m">
              <li data-oid="1c3dl8z">
                <Link to="/" className="hover:text-blue-500" data-oid="kaqj_8f">
                  HOME
                </Link>
              </li>
              <li data-oid=":12usbj">
                <Link
                  to="/clubs"
                  className="hover:text-blue-500"
                  data-oid="::o2-xh"
                >
                  CLUBS
                </Link>
              </li>
              <li data-oid="m48iaw8">
                <Link
                  to="/solution"
                  className="hover:text-blue-500"
                  data-oid="57qaea:"
                >
                  SOLUTION
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            to="/"
            className="rounded-full bg-gray-800 text-white p-4 ml-auto"
            data-oid="k1-xkba"
          >
            Login and Register
          </Link>
        </div>

        <div
          className="text-white text-center mt-60 text-6xl"
          data-oid="hlxa68j"
        >
          <h1
            style={{
              fontStyle: "normal",
              fontWeight: "700",
              fontFamily: "'Noto Sans', sans-serif",
            }}
            data-oid="vx09em:"
          >
            Run fast, run Free
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
