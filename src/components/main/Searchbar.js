import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../../stateContext";
import { useParams } from "react-router-dom";


function Searchbar({ inputValue, onInputChange, onSearch }) {
  const { users } = useContext(StateContext);
  console.log("searchbar users",users);

  return (
    <div>
      <form>
        <div className="flex justify-end m-5 space-x-2">
          <input
            className="text-gray-800 rounded-sm p-3 text-lg"
            type="text"
            placeholder="Search language..."
            value={inputValue}
            onChange={onInputChange}
          />
          <button className="btn btn-ghost btn-circle" type="submit" onClick={onSearch}>
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
    </div>
  );
}

export default Searchbar;
