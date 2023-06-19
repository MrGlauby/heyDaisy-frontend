import React from "react";
import "./App.css";
import EventsSection from "./components/homepage/EventsSection";
import Footer from "./components/main/Footer";
import CallToActionSection from "./components/homepage/CallToActionSection";

function App() {
  return (
    <>
      <EventsSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}

export default App;
