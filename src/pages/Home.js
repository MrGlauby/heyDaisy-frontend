import React from "react";
import AppPreviewSection from "../components/homepage/AppPreviewSection";
import HeroSection from "../components/homepage/HeroSection";
// import Navbar from "../components/main/Navbar";
import AboutUsSection from "../components/homepage/AboutUsSection";
import ReviewsSection from "../components/homepage/ReviewsSection";
import EventsSection from "../components/homepage/EventsSection";
import Footer from "../components/main/Footer";
import CallToActionSection from "../components/homepage/CallToActionSection";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <AboutUsSection />
      <EventsSection />
      <AppPreviewSection />
      <ReviewsSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}
