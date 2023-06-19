import React from "react";
import AboutUsSection from "./components/homepage/AboutUsSection";
import ReviewsSection from "./components/homepage/ReviewsSection";

import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import EventsSection from "./components/homepage/EventsSection";
import Footer from "./components/main/Footer";
import CallToActionSection from "./components/homepage/CallToActionSection";

function App() {
  return (
    <>
      <AboutUsSection />
      <EventsSection />
      <ReviewsSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}

export default App;
