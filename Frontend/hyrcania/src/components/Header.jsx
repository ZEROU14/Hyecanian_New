import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="relative w-full h-dvh z-50 p-4 bg-gradient-to-b from-blue-900 to-teal-700"
      data-oid="i7vodyk"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 bg-[url('./components/images/headerBg.jpg')]"
        data-oid="xdp70un"
      ></div>

      <div className="relative z-10" data-oid="i.u_s10">
        <div className="flex items-center " data-oid=":2n19uf">
          <Link
            to="/"
            className="text-3xl font-bold text-white"
            data-oid="ap06jme"
          >
            Hyrcania
          </Link>

          <nav
            className="rounded-full bg-gray-800 text-white p-4 ml-64"
            data-oid="cqcpr.e"
          >
            <ul className="flex space-x-4" data-oid="m-thds6">
              <li data-oid="kemmdjz">
                <Link to="/" className="hover:text-blue-500" data-oid="nkplx01">
                  HOME
                </Link>
              </li>
              <li data-oid="a3tvoor">
                <Link
                  to="/clubs"
                  className="hover:text-blue-500"
                  data-oid="bmmeo3-"
                >
                  CLUBS
                </Link>
              </li>
              <li data-oid="m8hc8_j">
                <Link
                  to="/solution"
                  className="hover:text-blue-500"
                  data-oid="8-8ek7u"
                >
                  SOLUTION
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            to="/"
            className="rounded-full bg-gray-800 text-white p-4 ml-auto"
            data-oid="h8hgwi2"
          >
            Login and Register
          </Link>
        </div>

        <div
          className="text-white text-center mt-60 text-6xl"
          data-oid="aqgccup"
        >
          <h1
            style={{
              fontStyle: "normal",
              fontWeight: "700",
              fontFamily: "'Noto Sans', sans-serif",
            }}
            data-oid="zfqdny6"
          >
            Run fast, run Free
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
