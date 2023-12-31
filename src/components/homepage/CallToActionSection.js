import React from "react";
import { Link } from "react-router-dom";

export default function CallToActionSection() {
  return (
    <div>
      <div className="hero h-full p-32 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h2 className="text-7xl font-bold">Join us!</h2>
            <p className="py-6">
              Join our language learning revolution! Our app offers an immersive
              experience to master languages effortlessly. Connect with fellow
              language enthusiasts at exciting events and unlock a world of
              linguistic possibilities. Register now and embark on your language
              learning adventure today!
            </p>
            <Link to="register" className="btn btn-primary">
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
