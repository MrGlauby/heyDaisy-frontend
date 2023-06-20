import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

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
          <div className="text-content">
            <h3 className="my-3 font-semibold text-2xl">Video</h3>
            <p>
              "Get ready to level up your connections with our cutting-edge
              video call feature! Say goodbye to boring, one-dimensional
              conversations and embrace the power of face-to-face interaction,
              no matter where you are. Engage in dynamic discussions, share your
              screen, and build genuine relationships that go beyond words. It's
              time to take your conversations to the next level!"
            </p>
          </div>
        );
      case 2:
        return (
          <div className="text-content">
            <h3 className="my-3 font-semibold text-2xl">Chat</h3>
            <p>
              "Unleash the power of words with our chat feature that's designed
              to ignite instant connections and foster meaningful conversations.
              Whether you're seeking language exchange partners, language
              enthusiasts, or cultural enthusiasts, our chat feature brings you
              a vibrant community at your fingertips. Share your language
              journey, exchange tips, and make lifelong friendships on the go.
              Get ready to dive into a world of limitless linguistic
              possibilities!"
            </p>
          </div>
        );
      case 3:
        return (
          <div className="text-content">
            <h3 className="my-3 font-semibold text-2xl">Events</h3>
            <p>
              "Experience the thrill of cultural immersion with our exciting
              events feature! From virtual language workshops and global
              language festivals to interactive language challenges, our events
              are a gateway to a world of diverse cultures and languages.
              Connect with like-minded language enthusiasts, expand your
              horizons, and embrace the joy of learning together. With our
              events, every day is a celebration of languages, cultures, and
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
          <div className="image-content">
            <p>Video</p>
            <img
              src="https://via.placeholder.com/300x500"
              alt="Video Placeholder"
            />
          </div>
        );
      case 2:
        return (
          <div className="image-content">
            <p>Chat</p>
            <img
              src="https://via.placeholder.com/300x500"
              alt="Chat Placeholder"
            />
          </div>
        );
      case 3:
        return (
          <div className="image-content">
            <p>Events</p>
            <img
              src="https://via.placeholder.com/300x500"
              alt="Events Placeholder"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex md:container md:mx-auto justify-center content-center p-10">
        <div className="flex content-center gap-10">
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
