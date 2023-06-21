import { StateContext } from "../stateContext";
//import { useParams } from 'react-router-dom';
import React, { useContext } from "react";

function StudentGallery() {
  const { students } = useContext(StateContext);
  console.log(students);

  return (
    <div>
      {students.length &&
        students.map((student) => <div> {student.firstName} </div>)}
      StudentGallery
    </div>
  );
}

export default StudentGallery;
