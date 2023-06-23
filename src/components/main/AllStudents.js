import React from "react";
import { StateContext } from "../../stateContext";
import { useContext, useState, useEffect } from "react";
import SingleStudent from "./SingleStudent";
import Searchbar from "./Searchbar";

function AllStudents() {
  const { users } = useContext(StateContext);
  console.log(users);

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

  return (
    <>
      <Searchbar
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSearch={handleSearch}
      />

      <div className="flex flex-wrap justify-around">
        {filteredLanguage.length &&
          filteredLanguage.map((user) => <SingleStudent user={user} />)}
      </div>
    </>
  );
}

export default AllStudents;
