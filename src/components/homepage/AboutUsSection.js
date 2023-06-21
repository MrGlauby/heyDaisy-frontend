import React from "react";
import AboutUsSectionPicture from "../../img/AboutUsSectionPicture.jpg";

function AboutUsSection() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={AboutUsSectionPicture}
          alt="heyDaisy"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">What we do and why:</h1>
          <p className="py-6">Speaking a new language is an unparalleled tool for personal growth.<br></br><br></br>
          Unlike traditional apps out there, heyDaisy wants you to be brave and actually speak the language since this is the most effective way to boost your skills! Connect with like-minded learners and share experiences, fun and pride in getting better step by step!</p>
          <a href="register" target="_blank"  className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
