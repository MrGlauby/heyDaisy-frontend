import React from "react";
import { UilFlower } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <UilFlower size={60} color="#F4F498" />

          <div>
            <p className="text-3xl font-semibold">heyDaisy</p>
            <p>Learn. Share. Communicate.</p>
          </div>
        </div>
        <div>
            <span className="footer-title">Company</span>
            <Link to="about" className="link link-hover hover:scale-110">About us</Link>
            <Link to="contact" className="link link-hover hover:scale-110">Contact</Link>
            <Link to="register" className="link link-hover hover:scale-110">Blog</Link>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <Link to="register" className="link link-hover hover:scale-110">Legal</Link>
            <Link to="register" className="link link-hover hover:scale-110">Terms of use</Link>
            <Link to="register" className="link link-hover hover:scale-110">Privacy policy</Link>
            <Link to="register" className="link link-hover hover:scale-110">Cookie policy</Link>
          </div>
          <div>
            <span className="footer-title">User</span>
            <Link to="register" className="link link-hover hover:scale-110">Register</Link>
            <Link to="login" className="link link-hover hover:scale-110">Login</Link>
            <Link to="faq" className="link link-hover hover:scale-110">FAQs</Link>
            <Link to="download" className="link link-hover hover:scale-110">Downloads</Link>
          </div>
      </footer>
    </div>
  );
}
