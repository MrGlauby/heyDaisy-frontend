import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/heyDaisy1.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar   bg-violet-50 p-5 ">
        <div className="flex-1 ">
          <Link to={"/"}>
            <img
              className="logo flex self-start h-24 w-24 transition duration-150 ease-in-out hover:scale-110"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        <div>
          <ul className="menu menu-horizontal  text-lg">
            <li className="p-5">
              <Link to={"/register"}>
                <button className="btn btn-primary ">Register</button>
              </Link>
            </li>
            <li className="p-5">
              <Link to={"/login"}>
                <button className="btn btn-primary">Login</button>
              </Link>
            </li>
            <li className="p-5">
              <Link to={"/about"}>
                <button className="btn btn-primary">About us</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
