import React from "react";
import { StateContext } from "../../stateContext";
import { useContext } from "react";
import SingleStudent from "./SingleStudent";
import Searchbar from "./Searchbar";

function AllStudents(handleInputChange) {
  const { users } = useContext(StateContext);
  return (
    <>
      <Searchbar searchLanguage={searchLanguage} onChange={handleInputChange} />
      <div>AllStudents</div>
      <div>
        {users.length && users.map((user) => <SingleStudent user={user} />)}
      </div>
    </>
  );
}

export default AllStudents;
