import React from "react";
import AboutUsSectionPicture from "../../img/AboutUsSectionPicture.jpg";
import { Link } from "react-router-dom";

function AboutUsSection() {
  return (
    <div className="hero bg-base-200 p-32">
      <div className="border-indigo-300 hero-content flex-col lg:flex-row">
        <img
          src={AboutUsSectionPicture}
          alt="heyDaisy"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="flex flex-wrap p-2 w-auto">
          <p className="text-5xl font-bold">What we do and why:</p>
          <p className="py-1 m-1 w-auto">
            Speaking a new language is an unparalleled tool for personal growth.
            <br></br>

            Unlike traditional apps out there, heyDaisy wants you to be brave
            and actually speak the language since this is the most effective way
            to boost your skills! Connect with like-minded learners and share
            experiences, fun and pride in getting better step by step!
          </p>
          <a href="register" target="_blank" className="m-2 btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
