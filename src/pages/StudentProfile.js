import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import profilepic from "../img/randomUserReview1.jpg";
import Sidebar from "../components/main/Sidebar";
import { StateContext } from "../stateContext";

function StudentProfile() {
  const { users } = useContext(StateContext);
  console.log("users", users);
  const { _id } = useParams();
  const [activeTab, setActiveTab] = useState("personalDetails");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const user = users.find((user) => user._id === _id);
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
              {user.firstName} {user.lastName}
              <span className="badge badge-lg">@username</span>
            </h2>
          </div>
          <div>
            <span>{user.email} </span>
          </div>
          <div></div>

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
              <span className="font-bold">I also speak:</span>
              <span> </span>
            </div>
            <div>
              <span className="font-bold">I want to learn:</span>
              <span> {user.language}</span>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div className="flex m-4 card w-3/4 bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className="card-actions justify-end"></div>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex m-4 card w-3/4 bg-base-100 shadow-xl ">
          <div className="card-body">
            <div className="card-actions justify-end"></div>
            <p>
              "Hi! I'm Sirenita, a passionate tennis, music and dance lover. I
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

export default StudentProfile;
