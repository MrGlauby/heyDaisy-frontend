import React from "react";

import logo from "../../img/heyDaisy1.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar   bg-indigo-200 p-5 ">
        <div className="flex-1 ">
          <a href="home">
            <img
              className="logo flex self-start h-24 w-24 transition duration-150 ease-in-out hover:scale-110"
              src={logo}
              alt="logo"
            />
          </a>
        </div>

        <div className="flex-none  ">
          <ul className="menu menu-horizontal px-1 text-lg 	 ">
            <li className="p-5">
              <a
                href="Register"
                target="_blank"
                className="shadow-xl bg-indigo-100 "
              >
                Register
              </a>
            </li>
            <li className="p-5">
              <a href="Login" className="shadow-xl bg-indigo-100 ">
                Login
              </a>
            </li>
            <li className="p-5">
              <a href="About" className="shadow-xl bg-indigo-100 ">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
