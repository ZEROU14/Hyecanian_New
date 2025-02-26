import React from "react";
import { Link } from "react-router-dom";
import { Anchor } from "antd";
import Overview from "@/components/Overview/Overview";
import Parcipants from "@/components/Participants/Participants.jsx"
const Dashboard = () => {
  const handleClick = (e, link) => {
    e.preventDefault();
    console.log(link);
  };
  return (
    <div className="flex flex-col bg-gray-200">
      <header>
        <div className="relative z-10" data-oid="s7ud9u_">
          <div className="flex items-center " data-oid="-u6b8lj">
            <Link
              to="/"
              className="text-3xl font-bold text-black  "
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
                  <Link
                    to="/"
                    className="hover:text-blue-500"
                    data-oid="kaqj_8f"
                  >
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
              Hi user
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-row h-full w-full">
        <div className="basis-1/6 ">
          <Anchor
            affix={false}
            onClick={handleClick}
            items={[
              {
                key: "1",
                href: "",
                title: "Overview",
              },
              {
                key: "2",
                href: {Parcipants},
                title: "Participants",
              },
             
            ]}
          />
        </div>
        <div className="basis-full  bg-gray-500">
         <Overview/>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
