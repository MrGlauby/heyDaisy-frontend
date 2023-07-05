import React, { useState } from "react";
import Sidebar from "../components/main/Sidebar";
import { Link } from "react-router-dom";
// import getUser from "../utils/authUtils";
import { StateContext } from "../stateContext";
import { useContext } from "react";
import { UilCommentSearch } from "@iconscout/react-unicons";

export default function MyStudentProfile() {
  const { user, users, updatedUserData, setUpdatedUserData } =
    useContext(StateContext);

  const [activeTab, setActiveTab] = useState("personalDetails");
  const [isEditing, setIsEditing] = useState(false);

  // State variables for the profile information
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [country, setCountry] = useState("");
  const [motherLanguage, setMotherLanguage] = useState("");
  const [spokenLanguage, setSpokenLanguage] = useState("");
  const [learnLanguage, setLearnLanguage] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = async () => {
    // Perform database update here with the updated values
    setUpdatedUserData({
      age,
      email,
      nationality,
      country,
      motherLanguage,
      spokenLanguage,
      learnLanguage,
    });

    //axios.put(localhost:5001/users/${user._id}, updatedUserData, headers:{authtoken: token})
    setIsEditing(false);
  };

  return user && user._id ? (
    <div className="lg:grid lg:grid-cols-[0.5fr,2fr,2fr] lg:min-full-screen mt-16 mb-16 sm:flex sm:flex-row">
      <div className="card-actions flex content-start">
        <Sidebar />
        {isEditing ? (
          <button
            className="btn btn-outline btn-primary ml-2"
            onClick={handleSaveChanges}
          >
            Save changes
          </button>
        ) : (
          <button
            className="btn btn-outline btn-primary ml-2"
            onClick={handleEditClick}
          >
            Edit your Profile
          </button>
        )}
      </div>

      {/* Profile Picture, Tabs, and Personal Details/Languages */}
      <div className="col-span-1 ">
        <div className="flex justify-center">
          <div className="flex flex-col text-center mt-8">
            <div className="p-4">
              <div className="avatar">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.profilePicture} alt="profilpic" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-2xl">
                <p>
                  {user.firstName} {user.lastName}
                </p>

                <span className="badge badge-lg">
                  @hey{user?.firstName}
                  {user?.lastName}
                </span>
              </h2>
            </div>

            <div className="p-4 ">
              <div className="tabs tabs-boxed justify-center">
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
        <div className="content flex justify-center p-8">
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
                  <span> {user.age}</span>
                )}
              </div>
              <div>
                <span className="font-bold">Email:</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <span> {user.email}</span>
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
                  <span> {user.nationality}</span>
                )}
              </div>
              <div>
                <span className="font-bold">Currently living:</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                ) : (
                  <span> {user.country}</span>
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
                    value={user.motherLanguage}
                    onChange={(e) => setMotherLanguage(e.target.value)}
                  />
                ) : (
                  <span> {user.motherLanguage}</span>
                )}
              </div>

              <div>
                <span className="font-bold">I want to learn:</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={user.learnLanguage}
                    onChange={(e) => setLearnLanguage(e.target.value)}
                  />
                ) : (
                  <span> {user.language}</span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center text-justify gap-5 m-5">
          <Link to="/chat">
            <button className="btn btn-neutral opacity-90 md:btn-md lg:btn-md">
              Enter Chatrooms <UilCommentSearch className="mb-2" />
            </button>
          </Link>
        </div>
      </div>

      {/* Description */}
      <div className="col-span-1 m-2 flex justify-center">
        <div className="flex text-justify mb-8">
          <div className="flex m-4 card w-full bg-base-100 shadow-xl ">
            <div className="card-body">
              <div className="badge badge-primary text-lg p-4 mb-8">
                About me
              </div>
              <div className="card-actions justify-end"></div>
              <p>{user.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    "..loading"
  );
}
