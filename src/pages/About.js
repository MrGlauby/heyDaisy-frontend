import React from "react";

import BackIMG from "../img/team.jpg";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";


export default function About() {
  return <div>
    <Navbar/>
    <div className="hero min-h-screen" ><img src={BackIMG} alt="Team Picture" /> 
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    
  <h2>Behin the scenzes</h2>
  <h2>Motivation</h2>
  <Footer/>
    </div>;
}
