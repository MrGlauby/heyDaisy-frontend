// import axios from "axios";

// export const data = [
//   {
//     id: 1,
//     name: "John Doe",
//     age: 35,
//     role: "the one whos name was mentioned most",
//     hobbies: "be absent",
//     beforeBootcamp: "secret agent",
//     finalWords: "I will be back!",
//     github: "xyz",
//   },
//   {
//     id: 2,
//     name: "Betty Doe",
//     age: 25,
//     role: "another fake student",
//     hobbies: "implement authentication",
//     beforeBootcamp: "another secret agent",
//     finalWords: "I will also be back!",
//     github: "xyz",
//   },
//   {
//     id: 3,
//     name: "Tom Doe",
//     age: 25,
//     role: "another fake student",
//     hobbies: "implement authentication",
//     beforeBootcamp: "another secret agent",
//     finalWords: "I will also be back!",
//     github: "xyz",
//   },
// ];

// export const fetchAllStudents = async () => {
//   try {
//     const students = await axios.get(`${process.env.REACT_APP_API}/students`);
//     return students;
//   } catch (err) {
//     console.error("Error fetching students:", err);
//     throw err; // Rethrow the error to handle it at a higher level if needed
//   }
// };
// export const fetchUsers = async () => {
//   try {
//     const users = await axios.get(`${process.env.REACT_APP_API}/users`);
//     return users;
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     throw err; // Rethrow the error to handle it at a higher level if needed
//   }
// };
