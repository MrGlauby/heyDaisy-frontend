import React from "react";

import { Link } from "react-router-dom";

import logo from "../../img/heyDaisy1.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar   bg-indigo-200 p-5 ">
        <div className="flex-1 ">
          <Link to="/">
            <img
              className="logoflex self-start  pl-2  h-35 w-full m-left-4px  min-w-[6rem]   max-w-[12rem]   duration-150 ease-in-out hover:scale-110"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex-none  ">
          <ul className="menu menu-horizontal">
            <li className="p-5   text-lg ">
              <Link
                to="/register"
                target="_blank"
                className="shadow-xl bg-indigo-100"
              >
                Register
              </Link>
            </li>
            <li className="p-5 text-lg">
              <Link to="/login" className="shadow-xl bg-indigo-100 ">
                Login
              </Link>
            </li>
            <li className="p-5 text-lg">
              <Link to="/about" className="shadow-xl bg-indigo-100 ">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
