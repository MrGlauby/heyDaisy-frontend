import axios from "axios";


export const fetchAllStudents = async () => {
  try {
    const students = await axios.get(`${process.env.REACT_APP_API}/students`);
    return students;
  } catch (err) {
    console.error("Error fetching students:", err);
    throw err; // Rethrow the error to handle it at a higher level if needed
  }
};
export const fetchUsers = async () => {
  try {
    const users = await axios.get(`${process.env.REACT_APP_API}/users`);
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err; // Rethrow the error to handle it at a higher level if needed
  }
};
