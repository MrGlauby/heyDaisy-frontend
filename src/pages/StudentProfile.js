import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/main/Sidebar";
import { StateContext } from "../stateContext";
import { UilHipchat } from "@iconscout/react-unicons";
import { UilVideo } from "@iconscout/react-unicons";

function StudentProfile() {
  const { users } = useContext(StateContext);
  console.log("users", users);
  const { _id } = useParams();
  const [activeTab, setActiveTab] = useState("personalDetails");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const user = users.find((user) => user._id === _id);

  if (!users || users.length === 0) {
    return (
      <div>
        <div className="flex justify-center m-8">
          <h2 className="m-2">Loading</h2>
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:grid lg:grid-cols-[0.5fr,2fr,2fr] lg:min-full-screen mt-16 mb-16 sm:flex sm:flex-wrap ">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-1">
        <div className="flex justify-center">
          <div className="flex flex-col text-center">
            <div className="p-4">
              <div className="avatar">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.profilePicture} alt="profilpic" />
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
              <div className="p-4 ml-12 mr-12">
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

            <div className="content flex justify-center p-2">
              {activeTab === "personalDetails" && (
                <div className="tab-content text-center">
                  <div>
                    <span className="font-bold">Age:</span>
                    <span> {user.age} </span>
                  </div>
                  <div>
                    <span className="font-bold">Gender:</span>
                    <span> {user.gender}</span>
                  </div>
                  <div>
                    <span className="font-bold">Nationality:</span>
                    <span> {user.nationality}</span>
                  </div>
                  <div>
                    <span className="font-bold">Currently living:</span>
                    <span> {user.country}</span>
                  </div>
                </div>
              )}
              {activeTab === "languages" && (
                <div className="tab-content text-center">
                  <div>
                    <span className="font-bold">Mother language:</span>
                    <span> {user.motherLanguage}</span>
                  </div>
                  <div>
                    <span className="font-bold">I want to learn:</span>
                    <span> {user.language}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-center text-justify gap-5 m-5">
              <Link to="/chat">
                <button className="btn btn-primary md:btn-md lg:btn-md">
                  Chat with {user.firstName}
                  <UilHipchat className="mb-1" />
                </button>
              </Link>
              <Link to="{user.videoLink}">
                <button className="btn btn-primary md:btn-md lg:btn-md">
                  Give {user.firstName} a call <UilVideo className="mb-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex justify-center text-justify gap-4 m-2 ">
          <div className="flex m-4 card w-3/4 bg-base-100 shadow-xl ">
            <div className="card-body">
              <div className="card-actions">
                <div className="badge badge-primary text-lg p-4 mb-8">
                  About {user.firstName}
                </div>
              </div>
              <p>{user.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudentProfile;
