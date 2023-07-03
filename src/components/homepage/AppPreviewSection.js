import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

import GoogleMeet from "../../img/googleMeet.png";
import Chatfunction from "../../img/Chatfunction.png";
import Eventssection from "../../img/Eventssection.png"

function AppPreviewSection() {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState(2); // Initially set Tab 2 as active

  // Function to handle tab click and update the active tab
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  // Function to render the text content based on the active tab
  const renderTabText = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className="text-content w-auto">
            <h3 className=" my-10 font-semibold text-2xl">Video</h3>
            <p className="text-justify">
              "Get ready to level up your connections with our cutting-edge
              video call feature! Say goodbye to boring, one-dimensional
              conversations and embrace the power of face-to-face interaction,
              no matter where you are. It's time to take your conversations to
              the next level!"
            </p>
          </div>
        );
      case 2:
        return (
          <div className="text-justify">
            <h3 className="my-10  font-semibold text-2xl">Chat</h3>
            <p className="text-content">
              "Unleash the power of words with our chat feature that's designed
              to ignite instant connections and foster meaningful conversations. 
              Share your language journey, exchange tips, and make lifelong
              friendships on the go. Get ready to dive into a world of limitless
              linguistic possibilities!"
            </p>
          </div>
        );
      case 3:
        return (
          <div className="text-content">
            <h3 className="my-10  font-semibold text-2xl">Events</h3>
            <p className="text-justify">
              "Experience the thrill of cultural immersion with our exciting
              events feature! From virtual language workshops and global
              language festivals to interactive language challenges, our events
              are a gateway to a world of diverse cultures and languages. With
              our events, every day is a celebration of languages, cultures, and
              unforgettable experiences!"
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  // Function to render the image content based on the active tab
  const renderTabImage = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className="image-content max-w-[60rem]">
            <img src={GoogleMeet} alt="Video Placeholder" />
          </div>
        );
      case 2:
        return (
          <div className="image-content max-w-[24rem]">
            <img src={Chatfunction} alt="Chat Placeholder" />
          </div>
        );
      case 3:
        return (
          <div className="image-content">
            <img src={Eventssection} alt="Events Placeholder" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="hero p-32 md:mx-auto justify-center content-center bg-base-200">
        <div className="flex content-center gap-x-48">
          <div className="max-w-md p-5">
            <h2 className="font-bold text-4xl mb-5">Features</h2>
            <div className="tabs tabs-boxed mb-5">
              {/* Links for each tab */}
              <Link
                className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
                onClick={() => handleTabClick(1)}
              >
                Video
              </Link>
              <Link
                className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
                onClick={() => handleTabClick(2)}
              >
                Chat
              </Link>
              <Link
                className={`tab ${activeTab === 3 ? "tab-active" : ""}`}
                onClick={() => handleTabClick(3)}
              >
                Events
              </Link>
            </div>
            <div>{renderTabText()}</div>
          </div>
          <div className="">
            <div className="mockup-phone border-primary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  {/* Render the image content based on the active tab */}
                  {renderTabImage()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppPreviewSection;
