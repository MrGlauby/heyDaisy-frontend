import React from "react";
import { useState } from "react";
import Sidebar from "../components/main/Sidebar";
import profilepic from "../img/randomUserReview4.jpg";

export default function MyStudentProfile() {
  const [activeTab, setActiveTab] = useState("personalDetails");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Sidebar />

      <div className="flex justify-center">
        <div className="flex flex-col text-center mt-8">
          <div className="p-4">
            <div className="avatar">
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={profilepic} alt="profilpic" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-2xl">
              Amanda Feliz
              <span className="badge badge-lg">@amandafeliz</span>
            </h2>
          </div>

          <div className="p-4">
            <div className="tabs tabs-boxed">
              <button
                className={`tab ${
                  activeTab === "personalDetails" ? "tab-active" : ""
                }`}
                onClick={() => handleTabClick("personalDetails")}
              >
                Personal Details
              </button>
              <button
                className={`tab ${
                  activeTab === "languages" ? "tab-active" : ""
                }`}
                onClick={() => handleTabClick("languages")}
              >
                Languages
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="content flex justify-center p-4">
        {activeTab === "personalDetails" && (
          <div className="tab-content text-center">
            <div>
              <span className="font-bold">Age:</span>
              <span> 30</span>
            </div>
            <div>
              <span className="font-bold">Nationality:</span>
              <span> Swedish</span>
            </div>
            <div>
              <span className="font-bold">Currently living:</span>
              <span> Germany</span>
            </div>
          </div>
        )}
        {activeTab === "languages" && (
          <div className="tab-content text-center">
            <div>
              <span className="font-bold">Mother language:</span>
              <span> Swedish</span>
            </div>
            <div>
              <span className="font-bold">I also speak:</span>
              <span> English</span>
            </div>
            <div>
              <span className="font-bold">I want to learn:</span>
              <span>Spanish</span>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div className="flex m-4 card w-3/4 bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className="card-actions justify-end"></div>
            <p>
              "Hi! I'm Amanda, a passionate tennis, music and dance lover. I
              love getting lost in the rhythms and letting myself get carried
              away by the music, whether dancing with friends or enjoying live
              concerts. In addition, I have a great interest in learning and
              practicing Spanish. I would love to immerse myself in the Hispanic
              culture, meet new people and improve my language skills. I am
              excited for the journey ahead as I combine my passions and
              continue to enrich my life through tennis, music, dance and
              learning Spanish."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
