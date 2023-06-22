import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../stateContext";
import { useParams } from "react-router-dom";

function Searchbar({ onChange, searchLanguage }) {
  const { users } = useContext(StateContext);
  console.log(users);

  const [searchLanguage, setSearchLanguage] = useState("");
  const [filteredLanguage, setFilteredLanguage] = useState(users);

  useEffect(() => {
    setFilteredLanguage(users);
  }, [users]);

  const handleInputChange = (event) => {
    setSearchLanguage(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredResults = users.filter((user) => {
      // const motherLanguage = user.motherLanguage.toLowerCase();
      const desiredLanguage = user.language.toLowerCase();
      return (
        // motherLanguage.includes(searchLanguage.toLowerCase()) ||
        desiredLanguage.includes(searchLanguage.toLowerCase())
      );
    });
    setFilteredLanguage(filteredResults);
  };

  return (
    <div>
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
        <h1 className="text-5xl font-bold">All Students</h1>
      </div>
    </div>
  );
}

export default Searchbar;
