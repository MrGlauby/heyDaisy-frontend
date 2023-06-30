import React from "react";
import AllStudents from "../components/main/AllStudents";
import Sidebar from "../components/main/Sidebar";

function StudentGallery() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <AllStudents />
      </div>
    </>
  );
}

export default StudentGallery;
