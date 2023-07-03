import React from "react";
import AppPreviewSection from "../components/homepage/AppPreviewSection";
import HeroSection from "../components/homepage/HeroSection";
import AboutUsSection from "../components/homepage/AboutUsSection";
import ReviewsSection from "../components/homepage/ReviewsSection";
import EventsSection from "../components/homepage/EventsSection";
import CallToActionSection from "../components/homepage/CallToActionSection";
import MarqueeBanner from "../components/homepage/MarqueeBanner";
// import SmoothScroll from "../components/homepage/SmoothScroll";
import ScrollUpButton from "../components/homepage/ScrollUpButton";

export default function Home() {
  return (
    <>
      {/* <SmoothScroll> */}
      <HeroSection />
      <AboutUsSection />
      <MarqueeBanner />
      <EventsSection />
      <AppPreviewSection />
      <ReviewsSection />
      <CallToActionSection />
      <ScrollUpButton />
      {/* </SmoothScroll> */}
    </>
  );
}
