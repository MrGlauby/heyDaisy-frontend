import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/heyDaisy1.png";

export default function Navbar({ isAuthenticated, user, logOut }) {
  return (
    <div>
      <div className="navbar bg-violet-100 p-5 z-50">
        <div className="flex-1 ">
          <Link to="/">
            <img
              className="logoflex self-start pl-2 h-35 w-full m-left-4px  min-w-[6rem] max-w-[12rem] duration-150 ease-in-out hover:scale-110"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        <div>
          <ul></ul>
        </div>

        <div className="flex-none ">
          <ul className="menu menu-horizontal">
            <li className="p-5 text-lg">
              <Link to="/about">
                <button className="btn btn-primary text-lg"> About Us</button>
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="p-5 text-lg">
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-primary btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={user.profilePicture} />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <h3 className="text-lg mb-3 text-primary-focus">
                        My Settings
                      </h3>
                      <li>
                        <Link to="/myprofile">
                          <p className="justify-between">My Profile</p>
                        </Link>
                      </li>

                      <li className="text-lg ">
                        <Link to="/">
                          <p className="text-lg" onClick={logOut}>
                            Logout
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="p-5 text-lg ">
                  <Link to="/register" target="_blank">
                    <button className="btn btn-primary text-lg">
                      Register
                    </button>
                  </Link>
                </li>
                <li className="p-5 text-lg">
                  <Link to="/login">
                    <button className="btn btn-primary text-lg">Login</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
