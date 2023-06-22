import { StateContext } from "../stateContext";
import React, { useContext } from "react";
import StudentImg from "../img/randomUserReview1.jpg";
import Footer from "../components/main/Footer";
import Navbar from "../components/main/Navbar";
import { useState, useEffect } from "react";

function StudentGallery() {
  const { students } = useContext(StateContext);
  console.log(students);

  const [searchLanguage, setSearchLanguage] = useState("");
  const [filteredLanguage, setFilteredLanguage] = useState(students);

  useEffect(() => {
    setFilteredLanguage(students);
  }, [students]);

  const handleInputChange = (event) => {
    setSearchLanguage(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredResults = students.filter((student) => {
      const motherLanguage = student.language.motherLanguage.toLowerCase();
      const desiredLanguage = student.language.desiredLanguage.toLowerCase();
      return (
        motherLanguage.includes(searchLanguage.toLowerCase()) ||
        desiredLanguage.includes(searchLanguage.toLowerCase())
      );
    });
    setFilteredLanguage(filteredResults);
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSearch}>
        <div className="flex justify-end m-5 space-x-2">
          <input
            className="text-gray-800 rounded-sm p-1 text-lg"
            type="text"
            placeholder="Search language..."
            value={searchLanguage}
            onChange={handleInputChange}
          />
          <button className="btn btn-ghost btn-circle" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
      <div className="flex justify-center m-8 p-8">
        <h1 className="text-5xl font-bold">All students</h1>
      </div>
      <div className="flex flex-wrap justify-around">
        {filteredLanguage.map((student) => (
          <div
            className="m-8 card card-compact w-96 bg-base-100 shadow-xl"
            key={student.id}
          >
            <figure>
              <img src={StudentImg} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="self-center card-title">
                {student.firstName} {student.lastName}
              </h2>
              <div className="tab-content text-center">
                <div>
                  <span className="font-bold">Nationality:</span>
                  <span> {student.nationality}</span>
                </div>
                <div>
                  <span className="font-bold">Location:</span>
                  <span> {student.country}</span>
                </div>
                <div>
                  <span className="font-bold">Speaks:</span>
                  <span> {student.language.motherLanguage}</span>
                </div>
                <div>
                  <span className="font-bold">Wants to learn:</span>
                  <span> {student.language.desiredLanguage}</span>
                </div>
              </div>
              <div className="flex justify-center card-actions">
                <button className="btn btn-primary">See Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default StudentGallery;
/*
<div>
  {students.length &&
    students.map((student) => <div> {student.firstName} </div>)}
  StudentGallery
</div>;*/
