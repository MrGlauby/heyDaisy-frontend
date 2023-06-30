import React from "react";

import Team from "../img/randomUserReview2.jpg"
import behind from "../img/behind.jpg"


import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

export default function About() {
  return <div className="relative">
    <Navbar/>
    
    <div className="hero mt-20">
  <div className="hero-content">
    

    <div>
      <h1 className="text-5xl font-bold">Our heyDaisy Team</h1>
      <p className="py-6 text-justify "> Introducing Our Dynamic Team

Welcome to our dynamic team, a collective of talented individuals working together towards a common goal. We believe in the power of collaboration and diversity, leveraging our combined expertise to achieve extraordinary results.

Each team member brings a unique set of skills and perspectives, allowing us to tackle challenges from multiple angles. We thrive on innovation and continuous learning, constantly pushing the boundaries of what is possible.

Our team values open communication, mutual respect, and a supportive work environment. We believe that by fostering strong relationships and encouraging each other's growth, we can achieve greatness as a cohesive unit.

Together, we are a force to be reckoned with, ready to overcome obstacles and make a significant impact in our field. With unwavering dedication and a shared commitment to excellence, we are poised to achieve remarkable success.</p>
    </div>
  </div>
</div>

{/*TEAM Section */}
<div className="hero mt-20">
  <div className="hero-content">
    <img src={Team} className="max-w-sm rounded-lg shadow-2xl" />
    <img src={Team} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Our Team</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>

  
<div className="hero bg-base-200">
  <div className="hero-content lg:flex-row-reverse">
    <img src={Team} className="max-w-sm rounded-lg shadow-2xl" />
    <img src={Team} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold">  30.06.23 -  Roadmap!</h1>
      <p className="py-2 text-justify  ">  Welcome to our language app! Discover our exciting Features Roadmap designed to enhance your learning journey: dible language learning journey. Our app is here to empower you, guide you, and make your language learning experience enjoyable and effective. Say hello to a world of possibilities and embrace the joy of learning languages. </p>
    </div>
  </div>
</div>

{/* Motivation */}

<div className="hero p-20">
  <div className="hero-content">
    <img src={Team} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Motivation for our Project</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>

{/* Behind the Screen */}
<div className="hero bg-base-200 p-20">
  <div className="hero-content lg:flex-row-reverse">
    <img src={behind} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold">  Behind The Screen</h1>
      <p className="py-2 text-justify  ">  Welcome to our language app! Discover our exciting Features Roadmap designed to enhance your learning journey: dible language learning journey. Our app is here to empower you, guide you, and make your language learning experience enjoyable and effective. Say hello to a world of possibilities and embrace the joy of learning languages. </p>
    </div>
  </div>
</div>
  
  

  <Footer />
    </div>;
}
