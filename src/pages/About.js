import React from "react";
import BackIMG from "../img/team.jpg";
import Team from "../img/randomUserReview2.jpg";

export default function About() {
  return (
    <div className="relative">
      {/*TEAM Section */}
      <div className="hero min-h-screen bg-base-200 p-0">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Team} className="max-w-sm rounded-lg shadow-2xl" />
          <img src={Team} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Our Team</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={Team} className="max-w-sm rounded-lg shadow-2xl" />
          <img src={Team} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <h2>Motivation</h2>

      <h2>Behind the Screen</h2>
      <h2>Comming soon</h2>
    </div>
  );
}
