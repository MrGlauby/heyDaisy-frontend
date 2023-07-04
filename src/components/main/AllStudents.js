import React from "react";
import { StateContext } from "../../stateContext";
import { useContext, useState, useEffect } from "react";
import SingleStudent from "./SingleStudent";
import Searchbar from "./Searchbar";

function AllStudents() {
  const { users } = useContext(StateContext);

  const [inputValue, setInputValue] = useState("");
  const [filteredLanguage, setFilteredLanguage] = useState([]);

  useEffect(() => {
    setFilteredLanguage(users);
  }, [users]);

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredResults = users.filter((user) => {
      const motherLanguage = (user.motherLanguage || "").toLowerCase();
      const desiredLanguage = (user.language || "").toLowerCase();
      return (
        motherLanguage.includes(inputValue.toLowerCase()) ||
        desiredLanguage.includes(inputValue.toLowerCase())
      );
    });
    setFilteredLanguage(filteredResults);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  if (!users || users.length === 0) {
    return (
      <div>
        <div className="flex justify-end m-8">
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
    <>
      <div className="flex flex-col">
        <Searchbar
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onSearch={handleSearch}
        />

        <div className="flex flex-wrap justify-around">
          {filteredLanguage.length ? (
            filteredLanguage.map((user) => (
              <SingleStudent user={user} key={user._id} />
            ))
          ) : (
            <p>No students found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AllStudents;
