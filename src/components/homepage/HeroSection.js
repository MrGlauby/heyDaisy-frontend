import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div className="hero p-32 bg-violet-50">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-7xl font-bold">Hola Hello Olá Ciao</h1>
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
}
