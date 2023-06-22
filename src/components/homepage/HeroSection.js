import React from "react";
import { Link } from "react-router-dom";


export default function HeroSection() {
<<<<<<< HEAD
  return <div>
            <div className="hero min-h-screen bg-violet-100">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-7xl font-bold">Hola  Hello  Ola  Ciao</h1>
                  <p className="py-6  text-2xl">Explore, grow, and unlock your linguistic potential in a supportive, diverse community. Join us and experience the joy of learning languages together!</p>
                  <Link to="register" target="_blank" className="btn btn-primary  text-lg">Get Started</Link>
                </div>
              </div>
            </div>
        </div>;
=======
  return (
    <div>
      <div className="hero p-32 bg-violet-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-7xl font-bold">Hola Hello Ola Ciao</h1>
            <p className="py-6  text-2xl">
              Explore, grow, and unlock your linguistic potential in a
              supportive, diverse community. Join us and experience the joy of
              learning languages together!
            </p>
            <a
              href="register"
              target="_blank"
              className="btn btn-primary  text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> b4154112ad8dd5d44b38f4342af79121d28f2d99
}
