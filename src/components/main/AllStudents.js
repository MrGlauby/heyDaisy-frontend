import React from "react";
// import { StateContext } from "../stateContext";
// import { useContext } from "react";

import SingleStudent from "./SingleStudent";

export default function AllStudents({students}) {
  return <div>
    {students.length && 
    students.map((student) => <SingleStudent student ={student} />)}

  </div>;
}
