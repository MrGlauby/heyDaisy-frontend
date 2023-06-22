import React, { useContext } from 'react';
// import React, { useState } from 'react';
import { StateContext } from '../../stateContext';
import { useParams } from 'react-router-dom';



export default function SingleStudent() {

    const {students} = useContext(StateContext);
    console.log(students);
    const { id } = useParams();
    const thisStudent = students.find((student) => student._id == id);
    console.log("thisStudent", thisStudent);


    
    return (
        <div>
                <h2> SingleStudent </h2>
                
        </div>
    )
}


