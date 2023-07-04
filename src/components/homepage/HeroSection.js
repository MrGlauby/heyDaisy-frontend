import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../../img/hero.mp4";

export default function HeroSection() {
  return (
    <div>
      <header class="relative flex items-center justify-center h-screen pb-16 overflow-hidden">
        <div class="flex justify-center relative z-30 p-5 text-2xl text-white">
          <div className="flex flex-col justify-center items-center font-bold max-w-7xl mt-4 mb-4">
            <h1 className="lg:text-9xl lg:leading-tight text-8xl md:text-8xl text-primary w-auto">
              Hola Hello Olá Ciao
            </h1>
            <div className=" max-w-3xl py-6 lg:text-5xl sm:text-4xl text-primary font-bold">
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
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </header>
    </div>
  );
}
