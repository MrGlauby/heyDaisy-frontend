import axios from "axios";

export const data = [
  {
    id: 1,
    name: "John Doe",
    age: 35,
    role: "the one whos name was mentioned most",
    hobbies: "be absent",
    beforeBootcamp: "secret agent",
    finalWords: "I will be back!",
    github: "xyz",
  },
  {
    id: 2,
    name: "Betty Doe",
    age: 25,
    role: "another fake student",
    hobbies: "implement authentication",
    beforeBootcamp: "another secret agent",
    finalWords: "I will also be back!",
    github: "xyz",
  },
  {
    id: 3,
    name: "Tom Doe",
    age: 25,
    role: "another fake student",
    hobbies: "implement authentication",
    beforeBootcamp: "another secret agent",
    finalWords: "I will also be back!",
    github: "xyz",
  },
];

export const fetchAllStudents = async () => {
  try {
    const students = await axios.get(
      "https://heydaisy-backend.onrender.com/students"
    );
    return students;
  } catch (err) {
    console.log(err);
  }
};
export const fetchSingleStudent = async () => {
  try {
    const student = await axios.get(
      "https://heydaisy-backend.onrender.com/students/:id"
    );
    return student;
  } catch (err) {
    console.log(err);
  }
};
