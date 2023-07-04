import React from "react";
import AppPreviewSection from "../components/homepage/AppPreviewSection";
import HeroSection from "../components/homepage/HeroSection";
import AboutUsSection from "../components/homepage/AboutUsSection";
import ReviewsSection from "../components/homepage/ReviewsSection";
import EventsSection from "../components/homepage/EventsSection";
import CallToActionSection from "../components/homepage/CallToActionSection";
import MarqueeBanner from "../components/homepage/MarqueeBanner";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <MarqueeBanner />
      <EventsSection />
      <AppPreviewSection />
      <ReviewsSection />
      <CallToActionSection />
    </>
  );
}
export default Home;
