import React from "react";
import { UilFlower } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import logo from "../../img/heyDaisy1.png";

export default function Footer() {
  return (
    <div className=" bottom-0 ">
      <footer className=" footer p-10 bg-base-300" >
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
          <span className="footer-title">Company</span>
          <Link to="/about" className="link link-hover hover:scale-110">
            About us
          </Link>
          <Link to="/contact" className="link link-hover hover:scale-110">
            Contact
          </Link>
          <Link to="/blog" className="link link-hover hover:scale-110">
            Blog
          </Link>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/register" className="link link-hover hover:scale-110">
            Legal
          </Link>
          <Link to="/register" className="link link-hover hover:scale-110">
            Terms of use
          </Link>
          <Link to="/register" className="link link-hover hover:scale-110">
            Privacy policy
          </Link>
          <Link to="/register" className="link link-hover hover:scale-110">
            Cookie policy
          </Link>
        </div>
        <div>
          <span className="footer-title">User</span>
          <Link to="/register" target="_blank" className="link link-hover hover:scale-110">
            Register
          </Link>
          <Link to="/login" className="link link-hover hover:scale-110">
            Login
          </Link>
          <Link to="/faq" className="link link-hover hover:scale-110">
            FAQs
          </Link>
          <Link to="/download" className="link link-hover hover:scale-110">
            Downloads
          </Link>
        </div>
      </footer>
    </div>
  );
}
