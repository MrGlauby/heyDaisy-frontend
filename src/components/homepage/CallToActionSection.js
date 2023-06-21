import React from "react";

export default function CallToActionSection() {
  return (
    <div>
      <div className="hero h-full p-16 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h2 className="text-5xl font-bold">Interested in joining us?</h2>
            <p className="py-6">
              Join our language learning revolution! Our app offers an immersive
              experience to master languages effortlessly. Connect with fellow
              language enthusiasts at exciting events and unlock a world of
              linguistic possibilities. Register now and embark on your language
              learning adventure today!
            </p>
            <a href="register" target="_blank" className="btn btn-primary ">REGISTER</a> 
          </div>
        </div>
      </div>
    </div>
  );
}
