import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../../img/hero.mp4";

export default function HeroSection() {
  return (
    <div>
      <div className="relative flex items-center justify-center pb-16 overflow-hidden h-[calc(100vh-160px)]">
        <div className="flex justify-center z-30 p-5 text-2xl text-white">
          <div className="flex flex-col justify-center items-center max-w-7xl text-center">
            <h1 className="lg:text-9xl md:text-5xl sm:text-4xl font-bold text-primary w-auto">
              Hola Hello Olá Ciao
            </h1>
            <div className="max-w-3xl py-6 lg:text-5xl sm:text-4xl text-white font-bold">
              The only language app you will ever need
            </div>
            <Link
              to="register"
              target="_blank"
              className="btn btn-primary text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
