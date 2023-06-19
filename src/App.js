import React from "react";


import "./App.css";

import HeroSection from "./components/homepage/HeroSection";
import Navbar from "./components/main/Navbar";
import AboutUsSection from "./components/homepage/AboutUsSection";
import ReviewsSection from "./components/homepage/ReviewsSection";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import EventsSection from "./components/homepage/EventsSection";
import Footer from "./components/main/Footer";
import CallToActionSection from "./components/homepage/CallToActionSection";

function App() {
  return (
    <>
     <Navbar />
    <HeroSection />

      <AboutUsSection />
      <EventsSection />
      <ReviewsSection />
      <CallToActionSection />
      <Footer />

   
    </>
  );
}

export default App;