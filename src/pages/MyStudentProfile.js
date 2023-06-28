import React, { useState } from "react";
import Sidebar from "../components/main/Sidebar";

import profilepic from "../img/randomUserReview4.jpg";
import { StateContext } from "../stateContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function MyStudentProfile() {
  const { users } = useContext(StateContext);
  console.log("MyStudentProfile", users);
  const { id } = useParams();
  const user = users.find((user) => user.id === id);
  console.log("MyStudentProfile - current user", user);


  const [activeTab, setActiveTab] = useState("personalDetails");
  const [isEditing, setIsEditing] = useState(false);

  // State variables for the profile information
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [livingLocation, setLivingLocation] = useState("");
  const [motherLanguage, setMotherLanguage] = useState("");
  const [spokenLanguage, setSpokenLanguage] = useState("");
  const [learnLanguage, setLearnLanguage] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    // Perform database update here with the updated values
    setIsEditing(false);
  };

  return (
    <div>
      <Sidebar />
      <div className="card-actions justify-end">
        <div className="p-4">
          {isEditing ? (
            <button className="btn btn-secondary" onClick={handleSaveChanges}>
              Save changes
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={handleEditClick}>
              Edit your Profile
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col text-center mt-8">
          <div className="p-4">
            <div className="avatar">
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={imageUrl} alt="profilpic" />
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
              {isEditing ? (
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              ) : (
                <span>{age}</span>
              )}
            </div>
            <div>
              <span className="font-bold">Nationality:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={user.nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              ) : (
                <span>{nationality}</span>
              )}
            </div>
            <div>
              <span className="font-bold">Currently living:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={livingLocation}
                  onChange={(e) => setLivingLocation(e.target.value)}
                />
              ) : (
                <span>{livingLocation}</span>
              )}
            </div>
          </div>
        )}
        {activeTab === "languages" && (
          <div className="tab-content text-center">
            <div>
              <span className="font-bold">Mother language:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={motherLanguage}
                  onChange={(e) => setMotherLanguage(e.target.value)}
                />
              ) : (
                <span>{motherLanguage}</span>
              )}
            </div>
            <div>
              <span className="font-bold">I want also speak:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={spokenLanguage}
                  onChange={(e) => setSpokenLanguage(e.target.value)}
                />
              ) : (
                <span>{spokenLanguage}</span>
              )}
            </div>
            <div>
              <span className="font-bold">I want to learn:</span>
              {isEditing ? (
                <input
                  type="text"
                  value={learnLanguage}
                  onChange={(e) => setLearnLanguage(e.target.value)}
                />
              ) : (
                <span>{learnLanguage}</span>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div className="flex m-4 card w-3/4 bg-base-100 shadow-xl ">
          <div className="card-body">
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
