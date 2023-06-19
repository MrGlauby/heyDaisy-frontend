import React from "react";
import AboutUsSection from "../components/homepage/AboutUsSection";
import ReviewsSection from "../components/homepage/ReviewsSection";
import EventsSection from "./components/homepage/EventsSection";
import Footer from "./components/main/Footer";
import CallToActionSection from "./components/homepage/CallToActionSection";

export default function Home() {
  return (
    <div>
      <EventsSection />
      <CallToActionSection />
      <Footer />
      <AboutUsSection />
      <ReviewsSection />
    </div>
  );
}
